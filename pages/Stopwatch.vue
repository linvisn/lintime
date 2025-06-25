<script setup>
import stopwatchSound from '~/assets/stopwatchSound.mp3'

const ms = ref(0)
const isStarted = ref(false)
const isPaused = ref(false)
const laps = ref([])
let startTime = 0
let elapsedTime = 0
let lapsAmount = 0
let stopwatch = null

onMounted(() => {
    window.addEventListener('beforeunload', (event) => {
        if(isStarted.value) {
          event.preventDefault()
        }
    })
})
onBeforeRouteLeave((to, from, next) => {
    if (isStarted.value) {
        const answer = window.confirm('Stopwatch is still working, progress will be reset if you change a page. Are you sure you want to leave?')
        if (answer) {
            next()
        }
        else {
            next(false)
        }
    } 
    else {
      next()
    }
})

const formatTime = (time) => {
    return `${ String(Math.floor((time / 1000) / 60)).padStart(2, '0') }:${ String(Math.floor((time / 1000) % 60)).padStart(2, '0') }.${ String(time % 1000).padStart(3, '0') }`
}
const startStopwatch = () => {
    isStarted.value = true
    isPaused.value = false
    startTime = Date.now()
    stopwatch = setInterval(() => {
        if(!isPaused.value) {
            ms.value = elapsedTime + (Date.now() - startTime)
        }
    }, 10);
}
const pauseStopwatch = () => {
    isPaused.value = true
    elapsedTime = ms.value
    
    clearInterval(stopwatch)
}
const resetStopwatch = () => {
    ms.value = 0
    elapsedTime = 0
    isStarted.value = false
    isPaused.value = false

    clearInterval(stopwatch)

    lapsAmount = 0
    laps.value.length = 0
}
const newLap = () => {
    lapsAmount++
    laps.value.push({
        id: lapsAmount,
        timeElapsed: lapsAmount > 1 ? formatTime(countTimeElapsed(lapsAmount, ms.value)) : formatTime(ms.value),
        timeElapsedFromStartValue: ms.value,
        timeElapsedFromStart: formatTime(ms.value)
    })

    var audio = new Audio(stopwatchSound)
    audio.play()
}
const countTimeElapsed = (value, time) => {
    value -= 2
    return time - laps.value[value].timeElapsedFromStartValue
}
</script>

<template>
    <Page>
        <PageHeader>Stopwatch</PageHeader>

        <PageContent>
            <PageTime>
                {{ formatTime(ms) }}
                <div v-if="isStarted" class="laps-amount mt-1 px-3 fs-2 fw-semibold text-center rounded-2">
                    {{ lapsAmount }} lap<span v-if="lapsAmount > 1">s</span>
                </div>
            </PageTime>

            <PageButtonGroup>
                <PageButton v-if="!isStarted" @click="startStopwatch()"><i class="bi bi-caret-right-fill"></i> Start Stopwatch</PageButton>
                <PageButton v-if="isStarted && !isPaused" @click="pauseStopwatch()"><i class="bi bi-pause-fill"></i> Pause Stopwatch</PageButton>
                <PageButton v-if="isStarted && isPaused" @click="startStopwatch()"><i class="bi bi-play-fill"></i> Resume Stopwatch</PageButton>
                <PageButton v-if="isStarted && isPaused" @click="resetStopwatch()"><i class="bi bi-arrow-clockwise"></i> Reset Stopwatch</PageButton>
                <PageButton v-if="isStarted" @click="newLap()"><i class="bi bi-stopwatch-fill"></i> Set a Lap</PageButton>
            </PageButtonGroup>

            <div class="w-100 mt-3">
                <PageLap v-for="lap in laps" :key="lap.id" :id="lap.id" :timeElapsed="lap.timeElapsed" :timeElapsedFromStart="lap.timeElapsedFromStart" :timeElapsedFromStartValue="lap.timeElapsedFromStartValue" />
            </div>
        </PageContent>
    </Page>
</template>

<style scoped>
.laps-amount {
    height: fit-content !important;

    background-color: rgb(123, 168, 185);
}
.midnight-fireplace .laps-amount {
    background-color: rgb(192, 143, 52);
}
.mocha .laps-amount {
    background-color: rgb(var(--ctp-mocha-blue-rgb));
}
</style>
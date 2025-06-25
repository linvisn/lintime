<script setup>
import timerSound from '~/assets/timerSound.mp3'

const seconds = ref(0)
const minutes = ref(0)
const hours = ref(0)
const time = ref(0)
const isStarted = ref(false)
const isPaused = ref(false)
let timer = null

onMounted(() => {
    window.addEventListener('beforeunload', (event) => {
        if(isStarted.value) {
          event.preventDefault()
        }
    })
})
onBeforeRouteLeave((to, from, next) => {
    if (isStarted.value) {
        const answer = window.confirm('Timer is still working, progress will be reset if you change a page. Are you sure you want to leave?')
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

watch([seconds, minutes, hours], ([newSeconds, newMinutes, newHours]) => {
    seconds.value = Math.floor(newSeconds)
    minutes.value = Math.floor(newMinutes)
    hours.value = Math.floor(newHours)
    time.value = (newSeconds + newMinutes * 60 + newHours * 3600)
})

const startTimer = () => {
    if(time.value > 0) {
        isStarted.value = true
        timer = setInterval(() => {
            if(!isPaused.value) {
                time.value -= 1

                if(time.value < 1) {
                    resetTimer()
                    var audio = new Audio(timerSound)
                    audio.play()
                }
            }
        }, 1000);
    }
    else {
        alert("An amount of time should be greater than 1 second.")
    }
}
const resetTimer = () => {
    time.value = (seconds.value + minutes.value * 60 + hours.value * 3600)
    isStarted.value = false
    isPaused.value = false

    clearInterval(timer)
}
</script>

<template>
    <Page>
        <PageHeader>Timer</PageHeader>

        <PageContent>
            <PageTime>
                <div>
                    <span v-if="Math.floor(time / 3600) > 0">{{ String(Math.floor(time / 3600)).padStart(2, '0') }}:</span>{{ String(Math.floor((time % 3600) / 60)).padStart(2, '0') }}:{{ String(time % 60).padStart(2, '0') }}
                </div>
            </PageTime>

            <PageInputGroup>
                <PageInput :inputClass="'rounded-start-1'" v-model:isStarted="isStarted" v-model:value="hours" @keyup.enter="startTimer()">
                    hours
                </PageInput>
                <PageInput :inputClass="'border-start-0 border-end-0'" v-model:isStarted="isStarted" v-model:value="minutes" @keyup.enter="startTimer()">
                    minutes
                </PageInput>
                <PageInput :inputClass="'rounded-end-1'" v-model:isStarted="isStarted" v-model:value="seconds" @keyup.enter="startTimer()">
                    seconds
                </PageInput>
            </PageInputGroup>

            <PageButtonGroup>
                <PageButton v-if="!isStarted" @click="startTimer()"><i class="bi bi-caret-right-fill"></i> Start Timer</PageButton>
                <PageButton v-if="isStarted && !isPaused" @click="isPaused = !isPaused"><i class="bi bi-pause-fill"></i> Pause Timer</PageButton>
                <PageButton v-if="isStarted && isPaused" @click="isPaused = !isPaused"><i class="bi bi-play-fill"></i> Resume Timer</PageButton>
                <PageButton v-if="isStarted" @click="resetTimer()"><i class="bi bi-arrow-clockwise"></i> Reset Timer</PageButton>
            </PageButtonGroup>
        </PageContent>
    </Page>
</template>
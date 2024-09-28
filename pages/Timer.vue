<script setup>
import timerSound from '~/assets/timerSound.mp3'

definePageMeta({
  title: 'Timer'
})

const seconds = ref(0)
const minutes = ref(0)
const hours = ref(0)
const time = ref(0)
const isStarted = ref(false)
const isPaused = ref(false)
let timer = null

const theme = useDefineTheme()

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
    if(time.value > 0 && time.value <= 120 * 3600) {
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
        alert("An amount of time should be greater than 1 second and less than 120 hours.")
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
    <div class="page" :class="theme">
        <PageHeader>Timer</PageHeader>

        <PageContent>
            <PageTime>
                <span>
                    <span v-if="Math.floor(time / 3600) > 0">{{ String(Math.floor(time / 3600)).padStart(2, '0') }}:</span>{{ String(Math.floor((time % 3600) / 60)).padStart(2, '0') }}:{{ String(time % 60).padStart(2, '0') }}
                </span>
                <i v-if="isPaused" class="bi bi-pause-btn-fill"></i>
            </PageTime>

            <PageInputGroup>
                <PageInput v-model:isStarted="isStarted" v-model:value="hours" @keyup.enter="startTimer()">
                    hours
                </PageInput>
                <PageInput v-model:isStarted="isStarted" v-model:value="minutes" @keyup.enter="startTimer()">
                    minutes
                </PageInput>
                <PageInput v-model:isStarted="isStarted" v-model:value="seconds" @keyup.enter="startTimer()">
                    seconds
                </PageInput>
            </PageInputGroup>

            <PageButtonGroup>
                <PageButton v-if="!isStarted" @click="startTimer"><i class="bi bi-caret-right-fill"></i> Start Timer</PageButton>
                <PageButton v-if="isStarted" @click="resetTimer"><i class="bi bi-arrow-clockwise"></i> Reset Timer</PageButton>
                <PageButton v-if="isStarted" @click="isPaused = !isPaused"><i class="bi bi-pause-fill"></i> Pause Timer</PageButton>
            </PageButtonGroup>
        </PageContent>
    </div>
</template>

<style scoped>
@import url("~/assets/page.css");
</style>
<script setup>
import tabataSound from '~/assets/tabataSound.mp3'

definePageMeta({
  title: 'Tabata'
})

const secondsForWork = ref(0)
const secondsForRest = ref(0)
const rounds = ref(0)
const time = ref(0)
const currentRound = ref(0)
const isStarted = ref(false)
const isPaused = ref(false)
const isWork = ref(false)
let tabata = null

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
        const answer = window.confirm('Tabata is still working, progress will be reset if you change a page. Are you sure you want to leave?')
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

watch([secondsForWork, secondsForRest, rounds], ([newSecondsForWork, newSecondsForRest, newRounds]) => {
    secondsForWork.value = Math.floor(newSecondsForWork)
    secondsForRest.value = Math.floor(newSecondsForRest)
    rounds.value = Math.floor(newRounds)
})

const startTabata = () => {
    if(secondsForWork.value >= 5 && secondsForRest.value >= 5 && secondsForWork.value <= 600 && secondsForRest.value <= 600 && rounds.value > 0) {
        isStarted.value = true
        time.value = 5
        tabata = setInterval(() => {
            if(!isPaused.value) {
                time.value -= 1

                if(time.value < 1) {
                    skipPhase()
                }
            }
        }, 1000);
    }
    else {
        alert("An amount of time for both work and rest should be greater than 5 seconds and less than 10 minutes. Also there should be at least 1 round.")
    }
}
const resetTabata = () => {
    time.value = secondsForWork.value
    currentRound.value = 0
    isStarted.value = false
    isPaused.value = false
    isWork.value = false

    clearInterval(tabata)
}
const skipPhase = () => {
    if(currentRound.value < rounds.value) {
        if(isWork.value) {
            time.value = secondsForRest.value
        }
        else {
            time.value = secondsForWork.value
            currentRound.value++
        }
        isWork.value = !isWork.value
    }
    else if (currentRound.value >= rounds.value) {
        resetTabata()
    }
    playSound()
}
const playSound = () => {
    var audio = new Audio(tabataSound)
    audio.play()
}
</script>

<template>
    <div class="page" :class="theme">
        <PageHeader>Tabata</PageHeader>

        <PageContent>
            <PageTime class="px-4 rounded-3" :class="{ 'work': isWork, 'rest': !isWork }" v-if="isStarted">
                {{ String(Math.floor((time % 3600) / 60)).padStart(2, '0') }}:{{ String(time % 60).padStart(2, '0') }}
                <div class="fs-2 fw-semibold opacity-75" v-if="isWork"> work </div>
                <div class="fs-2 fw-semibold opacity-75" v-if="!isWork"> rest </div>
                <div class="fs-1 fw-bold">Round {{ currentRound }} of {{ rounds }}</div>
            </PageTime>

            <PageInputGroup>
                <PageInput :inputClass="'rounded-start-1'" v-model:isStarted="isStarted" v-model:value="secondsForWork" @keyup.enter="startTimer()">
                    seconds for work
                </PageInput>
                <PageInput :inputClass="'border-start-0 border-end-0'" v-model:isStarted="isStarted" v-model:value="secondsForRest" @keyup.enter="startTimer()">
                    seconds for rest
                </PageInput>
                <PageInput :inputClass="'rounded-end-1'" v-model:isStarted="isStarted" v-model:value="rounds" @keyup.enter="startTimer()">
                    rounds
                </PageInput>
            </PageInputGroup>
            
            <PageButtonGroup>
                <PageButton v-if="!isStarted" @click="startTabata()"><i class="bi bi-caret-right-fill"></i> Start Tabata</PageButton>
                <PageButton v-if="isStarted && !isPaused" @click="isPaused = !isPaused"><i class="bi bi-pause-fill"></i> Pause Tabata</PageButton>
                <PageButton v-if="isStarted && isPaused" @click="isPaused = !isPaused"><i class="bi bi-play-fill"></i> Resume Tabata</PageButton>
                <PageButton v-if="isStarted && isPaused" @click="resetTabata()"><i class="bi bi-arrow-clockwise"></i> Reset Tabata</PageButton>
                <PageButton v-if="isStarted" @click="skipPhase()"><i class="bi bi-skip-end-fill"></i> Skip Phase</PageButton>
            </PageButtonGroup>
        </PageContent>
    </div>
</template>

<style scoped>
@import url("~/assets/page.css");

.work {
    background: rgba(255, 0, 0, 0.5);
}
.rest {
    background: rgba(0, 255, 0, 0.5);
}
</style>
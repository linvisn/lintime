<script setup>
import intervalSound from '~/assets/intervalSound.mp3'

const time = ref(0)
const intervals = ref([
    {
        value: 0,
        isRemovable: false
    },
    {
        value: 0,
        isRemovable: false
    }
])
const currentInterval = ref(0)
const rounds = ref(0)
const currentRound = ref(0)
const enableLoop = ref(false)
const isStarted = ref(false)
const isPaused = ref(false)
const switchColor = ref(false)
let interval = null

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
        const answer = window.confirm('Interval Timer is still working, progress will be reset if you change a page. Are you sure you want to leave?')
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

const addValue = () => {
    intervals.value.push(
        {
            value: 0,
            isRemovable: true
        }
    )
}
const removeValue = (index) => {
    intervals.value.splice(index, 1)
}
const startInterval = () => {
    if(checkIntervals()) {
        if(!enableLoop.value && rounds.value > 0 || enableLoop.value) {
            isStarted.value = true
            time.value = 5
            interval = setInterval(() => {
                if(!isPaused.value) {
                    time.value -= 1

                    if(time.value < 1) {
                        skipPhase()
                    }
                }
            }, 1000);
        }
        else {
            alert("An amount of rounds should be greater than 1.")
        }
    }
    else {
        alert("An amount of time for each interval should be greater than 1 second.")
    }
}
const checkIntervals = () => {
    let result = intervals.value.filter((int) => int.value < 1)

    if(result.length > 0) {
        return false
    }
    else {
        return true
    }
}
const skipPhase = () => {
    switchTimeValue()
    
    if(!enableLoop.value && currentRound.value > rounds.value) {
        resetInterval()
    }

    playSound()
}
const switchTimeValue = () => {
    if(currentInterval.value >= intervals.value.length || currentRound.value == 0) {
        currentRound.value++
        currentInterval.value = 0
    }
    time.value = intervals.value[currentInterval.value].value
    currentInterval.value++
    switchColor.value = !switchColor.value
}
const resetInterval = () => {
    time.value = intervals.value[0].value
    currentInterval.value = 0
    currentRound.value = 0
    isStarted.value = false
    isPaused.value = false
    switchColor.value = false

    clearInterval(interval)
}
const formatLabel = () => {
    return `Interval ${currentInterval.value}`
}
const playSound = () => {
    var audio = new Audio(intervalSound)
    audio.play()
}
</script>

<template>
    <div class="page" :class="theme">
        <PageHeader>Interval Timer</PageHeader>

        <PageContent>
            <div class="d-flex flex-row flex-wrap justify-content-center row">
                <div class="col-12 col-lg-6 mb-4">
                    <PageTime class="px-4 rounded-3" :class="{ 'work': switchColor, 'rest': !switchColor }" v-if="isStarted">
                        {{ String(Math.floor((time % 3600) / 60)).padStart(2, '0') }}:{{ String(time % 60).padStart(2, '0') }}
                        <div class="fs-2 fw-semibold opacity-75">{{ formatLabel() }}</div>
                        <div class="fs-1 fw-bold">Round {{ currentRound }}<span v-if="!enableLoop"> of {{ rounds }}</span></div>
                    </PageTime>
                    <PageButtonGroup>
                        <PageButton v-if="!isStarted" @click="startInterval()"><i class="bi bi-caret-right-fill"></i> Start Interval Timer</PageButton>
                        <PageButton v-if="!isStarted" @click="addValue()"><i class="bi bi-plus"></i> New Interval</PageButton>
                        <PageButton v-if="!isStarted && enableLoop" @click="enableLoop = false"><i class="bi bi-arrow-repeat"></i> Disable Loop</PageButton>
                        <PageButton v-if="!isStarted && !enableLoop" @click="enableLoop = true"><i class="bi bi-arrow-repeat"></i> Enable Loop</PageButton>
                        <PageButton v-if="isStarted && !isPaused" @click="isPaused = true"><i class="bi bi-pause-fill"></i> Pause Interval Timer</PageButton>
                        <PageButton v-if="isStarted && isPaused" @click="isPaused = false"><i class="bi bi-play-fill"></i> Resume Interval Timer</PageButton>
                        <PageButton v-if="isStarted && isPaused" @click="resetInterval()"><i class="bi bi-arrow-clockwise"></i> Reset Interval Timer</PageButton>
                        <PageButton v-if="isStarted" @click="skipPhase()"><i class="bi bi-skip-end-fill"></i> Skip Phase</PageButton>
                    </PageButtonGroup>
                </div>

                <PageInputColumnGroup>
                    <PageInputColumn v-model:isStarted="isStarted" v-model:isDisabled="enableLoop" v-model:value="rounds">
                        rnds
                    </PageInputColumn>
                    <PageInputColumn v-for="(item, index) in intervals" :isRemovable="item.isRemovable" @removeValue="removeValue(index)" v-model:isStarted="isStarted" v-model:value="intervals[index].value">
                        int {{ index + 1 }}
                    </PageInputColumn>
                </PageInputColumnGroup>
            </div>
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
import { useScreenOrientation } from '@vueuse/core'

export function useOrientation() {
    const { orientation } = useScreenOrientation()
    const isPortrait = computed(() => orientation.value.startsWith('portrait'))

    return isPortrait
}
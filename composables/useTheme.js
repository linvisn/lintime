import { useStorage } from '@vueuse/core'

export function useTheme() {
    const defaultTheme = useStorage('defaultTheme', 'Default')
  
    const theme = computed(() => ({
        'mocha': defaultTheme.value === 'Mocha',
        'midnight-fireplace': defaultTheme.value === 'Midnight Fireplace'
    }))
  
    return theme
}
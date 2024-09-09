import { useStorage } from '@vueuse/core'

export function useDefineTheme() {
    const defaultTheme = useStorage('defaultTheme', 'Default')
  
    const theme = computed(() => ({
        'mocha': defaultTheme.value === 'Mocha',
        'midnight-fireplace': defaultTheme.value === 'Midnight Fireplace'
    }))
  
    return theme
}
import create from 'zustand'

const useTheme = create(set => ({
    theme: 'dark',
    setTheme: (theme) => set(() => ({ theme: theme })),
  }))

export default useTheme
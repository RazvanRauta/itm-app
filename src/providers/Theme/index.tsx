import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext } from 'react'
import React, { useMemo, useState } from 'react'

export const ThemeContext = createContext({ toggleColorMode: () => {} })

interface ICustomThemeProviderProps {
  children?: React.ReactNode
}

const CustomThemeProvider: React.FC<ICustomThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider

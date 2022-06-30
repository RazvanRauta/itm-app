import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import React from 'react'

import { ThemeContext } from '@/providers/Theme'

export default function ThemeToggle() {
  const theme = useTheme()
  const colorMode = React.useContext(ThemeContext)

  return (
    <Box
      sx={{
        display: 'flex',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        position: 'absolute',
        right: '50px',
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

import Box from '@mui/material/Box'
import React, { memo } from 'react'

interface IMainProps {
  children?: React.ReactNode
}

export default memo(function Main({ children }: IMainProps) {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  )
})

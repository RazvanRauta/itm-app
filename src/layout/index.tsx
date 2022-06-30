import Box from '@mui/material/Box'
import React, { memo } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

interface ILayoutProps {
  children?: React.ReactNode
}

export default memo(function Layout({ children }: ILayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  )
})

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { memo } from 'react'

import Logo from '@/assets/images/logo.png'
import Container from '@/components/Container'
import ThemeToggle from '@/components/ThemeToggle'

const StyledLogo = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
})

export default memo(function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '50px',
        position: 'relative',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <StyledLogo src={Logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              gap: '8px',
              py: '8px',
            }}
          >
            <Button
              variant="text"
              sx={{
                textTransform: 'none',
                fontSize: '12px',
              }}
            >
              Lorem Ipsum
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontSize: '12px',
              }}
            >
              Lorem Ipsum
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontSize: '12px',
              }}
            >
              Lorem Ipsum
            </Button>
          </Box>
        </Box>
      </Container>
      <ThemeToggle />
    </Box>
  )
})

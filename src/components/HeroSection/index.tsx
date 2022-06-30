/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { memo } from 'react'
import Carousel from 'react-material-ui-carousel'

import Container from '../Container'

const texts = ['Picture 1', 'Picture 2', 'Picture 3']

export default memo(function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: '80px',
        pb: '50px',
        width: '100%',
        bgcolor: 'primary.main',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Container
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            '&.MuiToolbar-dense': {
              padding: 0,
            },
          }}
        >
          <Link color="white" underline="none" noWrap variant="h6" href="#" sx={{ p: 1 }}>
            Link 1
          </Link>
          <Link color="white" underline="none" noWrap variant="h6" href="#" sx={{ p: 1 }}>
            Link 2
          </Link>
          <Link color="white" noWrap variant="h6" underline="none" href="#" sx={{ p: 1 }}>
            Link 3
          </Link>
        </Toolbar>
      </Container>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Carousel
            animation="fade"
            navButtonsAlwaysVisible
            autoPlay={false}
            sx={{ flexGrow: 2, borderRadius: '10px' }}
            indicatorContainerProps={{
              style: { bottom: 10, zIndex: 10, position: 'absolute' },
            }}
          >
            {texts.map((txt, i) => (
              <Paper
                key={`picture-${i}`}
                elevation={10}
                sx={{
                  height: 350,
                  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <h1>{txt}</h1>
              </Paper>
            ))}
          </Carousel>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 350,
              bgcolor: 'background.default',
              width: '30%',
              p: '10px',
              gap: '10px',
              borderRadius: '10px',
            }}
          >
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                padding: '10px 20px',
              }}
            >
              <Typography variant="h6" gutterBottom>
                LOREM IPSUM LOREM
              </Typography>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Paper>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                padding: '10px 20px',
              }}
            >
              <Typography variant="h6" gutterBottom>
                LOREM IPSUM LOREM
              </Typography>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
})

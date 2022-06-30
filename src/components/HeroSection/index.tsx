/* eslint-disable jsx-a11y/anchor-is-valid */
import { type Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Carousel from 'react-material-ui-carousel'

import CardImage from '@/assets/images/cardImg.png'

import Container from '../Container'

export default memo(function HeroSection() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

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
        {!matches && (
          <Toolbar
            component="nav"
            variant="dense"
            sx={{
              '&.MuiToolbar-dense': {
                padding: 0,
              },
            }}
          >
            {[1, 2, 3].map((nr, i) => (
              <Link
                key={i}
                color="white"
                underline="none"
                noWrap
                variant="body1"
                href="#"
                sx={{ p: 1 }}
              >
                {`Link ${nr}`}
              </Link>
            ))}
          </Toolbar>
        )}
      </Container>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {!matches && (
            <Carousel
              animation="fade"
              navButtonsAlwaysVisible
              autoPlay={false}
              sx={{ flexGrow: 2, borderRadius: '10px' }}
              indicatorContainerProps={{
                style: { bottom: 10, zIndex: 10, position: 'absolute' },
              }}
            >
              {[0, 1, 2].map((txt, i) => (
                <LazyLoadImage
                  key={i}
                  alt="Card Img"
                  src={CardImage}
                  width={576}
                  height={250}
                  style={{
                    backgroundColor: 'lightgray',
                    objectFit: 'cover',
                  }}
                  placeholder={
                    <Skeleton
                      sx={{ bgcolor: 'grey.500' }}
                      variant="rectangular"
                      width={576}
                      height={250}
                    />
                  }
                />
              ))}
            </Carousel>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 250,
              bgcolor: 'background.default',
              width: matches ? '100%' : '30%',
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
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                LOREM IPSUM LOREM
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '9px', lineHeight: '12px' }}>
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
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                LOREM IPSUM LOREM
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '9px', lineHeight: '12px' }}>
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

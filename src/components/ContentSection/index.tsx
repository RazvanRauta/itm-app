import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { type Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { memo } from 'react'

import BigCard from '../BigCard'
import CenterGrid from '../CenterGrid'
import Container from '../Container'

export default memo(function ContentSection() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        pt: '20px',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: matches ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: '20px',
            }}
          >
            <BigCard />
            <BigCard />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              pt: '40px',
            }}
          >
            <Typography variant="body1" gutterBottom>
              Lorem Ipsum lorem ipsum
            </Typography>
            <CenterGrid />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                pt: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                pb: '60px',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                endIcon={
                  <ArrowForwardIosOutlinedIcon
                    sx={{
                      height: '14px',
                      position: 'absolute',
                      right: 0,
                      top: '10px',
                    }}
                  />
                }
                sx={{
                  fontSize: '12px',
                  width: '175px',
                  mt: '20px',
                  mb: '10px',
                }}
              >
                Lorem Ipsum
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
})

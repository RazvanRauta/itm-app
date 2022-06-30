import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import CardImage from '@/assets/images/cardImg.png'

export default memo(function CenterGrid() {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      sx={{
        pt: '40px',
      }}
    >
      {[0, 1, 2, 3].map((value) => (
        <Grid key={value} item justifySelf="center">
          <Paper
            sx={{
              width: '189px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              p: '15px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
              }}
            >
              Lorem Ipsum
            </Typography>
            <Typography gutterBottom>Lorem Ipsum</Typography>
            <LazyLoadImage
              alt="Card Img"
              src={CardImage}
              width={159}
              height={120}
              style={{
                backgroundColor: 'lightgray',
              }}
              placeholder={
                <Skeleton
                  sx={{ bgcolor: 'grey.500' }}
                  variant="rectangular"
                  width={159}
                  height={120}
                />
              }
            />
            <Button
              variant="contained"
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
                width: '100%',
                mt: '20px',
                mb: '10px',
              }}
            >
              Lorem Ipsum
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
})

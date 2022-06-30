import { type Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import Container from '../Container'

export default function NewsletterSection() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        borderTop: '1px solid lightgray',
        py: '20px',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography color="gray">Subscribe to our newsletter</Typography>{' '}
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'lightgray' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'lightgray' }}
          />
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: '12px',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

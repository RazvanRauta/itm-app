import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from '../Container'

export default function CTAComponent() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
        py: '40px',
        borderBottom: '10px solid lightskyblue',
      }}
    >
      <Container>
        <Typography variant="h6" color="white" sx={{ maxWidth: '70%', fontSize: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Container>
    </Box>
  )
}

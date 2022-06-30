import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default function BigCard() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '30px 65px 20px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        LOREM IPSUM LOREM
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontSize: '12px',
          marginTop: '30px',
          width: '200px',
        }}
      >
        Lorem Ipsum
      </Button>
    </Paper>
  )
}

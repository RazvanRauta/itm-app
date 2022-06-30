import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React, { memo } from 'react'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://rrazvan.dev" target="_blank">
        RRazvan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default memo(Copyright)

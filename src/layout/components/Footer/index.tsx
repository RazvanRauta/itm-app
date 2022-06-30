/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

import Container from '@/components/Container'

import Copyright from '../Copyright'

export default memo(function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#212121',
        color: 'white',
      }}
    >
      <Container>
        <Toolbar
          component="nav"
          variant="regular"
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            '&.MuiToolbar-regular': {
              padding: 0,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((nr, i) => (
            <Link
              key={i}
              color="white"
              underline="none"
              noWrap
              variant="body1"
              href="#"
              sx={{ p: 0 }}
            >
              {`Link ${nr}`}
            </Link>
          ))}
        </Toolbar>
        <Box py="20px">
          <Typography fontSize="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Copyright />
        </Box>
      </Container>
    </Box>
  )
})

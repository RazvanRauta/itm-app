import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import HeroSection from '@/components/HeroSection'
import Layout from '@/layout'
import CustomThemeProvider from '@/providers/Theme'

export default function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>
        <HeroSection />
        <Box>Content</Box>
        <hr />
        <Box>Newsletter</Box>
        <Box>CTA</Box>
        <hr />
      </Layout>
    </CustomThemeProvider>
  )
}

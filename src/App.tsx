import CssBaseline from '@mui/material/CssBaseline'

import Layout from '@/layout'
import CustomThemeProvider from '@/providers/Theme'

export default function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>Hello</Layout>
    </CustomThemeProvider>
  )
}

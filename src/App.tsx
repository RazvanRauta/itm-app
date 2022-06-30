import CssBaseline from '@mui/material/CssBaseline'

import ContentSection from '@/components/ContentSection'
import HeroSection from '@/components/HeroSection'
import Layout from '@/layout'
import CustomThemeProvider from '@/providers/Theme'

import CTAComponent from './components/CTASection'
import NewsletterSection from './components/NewsletterSection'

export default function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>
        <HeroSection />
        <ContentSection />
        <NewsletterSection />
        <CTAComponent />
      </Layout>
    </CustomThemeProvider>
  )
}

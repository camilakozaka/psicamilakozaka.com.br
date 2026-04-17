import { useEffect } from 'react'
import SectionInicio from '#/components/SectionInicio'
import SectionVisao from '#/components/SectionVisao'
import SectionValores from '#/components/SectionValores'
import SectionFormacao from '#/components/SectionFormacao'
import SectionTemas from '#/components/SectionTemas'
import SectionTCC from '#/components/SectionTCC'
import SectionContato from '#/components/SectionContato'
import Footer from '#/components/Footer'
import FloatingWhatsAppButton from '#/components/FloatingWhatsAppButton'
import { initializeAnalytics } from '#/utils/analytics'

export default function App() {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return (
    <>
      <main>
        <SectionInicio />
        <SectionVisao />
        <SectionValores />
        <SectionFormacao />
        <SectionTemas />
        <SectionTCC />
        <SectionContato />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}

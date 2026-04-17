import SectionInicio from '#/components/SectionInicio'
import SectionVisao from '#/components/SectionVisao'
import SectionValores from '#/components/SectionValores'
import SectionFormacao from '#/components/SectionFormacao'
import SectionTemas from '#/components/SectionTemas'
import SectionTCC from '#/components/SectionTCC'
import SectionContato from '#/components/SectionContato'
import Header from '#/components/Header'
import Footer from '#/components/Footer'
import FloatingWhatsAppButton from '#/components/FloatingWhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
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

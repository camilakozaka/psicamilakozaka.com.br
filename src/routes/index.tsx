import { createFileRoute } from '@tanstack/react-router'
import SectionInicio from '#/components/SectionInicio'
import SectionVisao from '#/components/SectionVisao'
import SectionValores from '#/components/SectionValores'
import SectionFormacao from '#/components/SectionFormacao'
import SectionTemas from '#/components/SectionTemas'
import SectionTCC from '#/components/SectionTCC'
import SectionContato from '#/components/SectionContato'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <SectionInicio />
      <SectionVisao />
      <SectionValores />
      <SectionFormacao />
      <SectionTemas />
      <SectionTCC />
      <SectionContato />
    </main>
  )
}

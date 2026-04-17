import { Ear, HandHeart, Heart, HeartHandshake, Sparkles, UserRound } from 'lucide-react'

const valores = [
  { label: 'Acolhimento', Icon: HandHeart },
  { label: 'Afeto', Icon: Heart },
  { label: 'Escuta Empática', Icon: Ear },
  { label: 'Humanidade', Icon: UserRound },
  { label: 'Carinho', Icon: Sparkles },
  { label: 'Cuidado', Icon: HeartHandshake },
]

export default function SectionValores() {
  return (
    <section id="valores" className="bg-[#2668C7] py-12  sm:py-16">
      <div className="page-wrap px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {valores.map(({ label, Icon }, i) => (
            <div
              key={label}
              className="rise-in flex min-h-40 flex-col items-center justify-center rounded-[2rem] border border-black/8 bg-white px-4 py-8 text-center shadow-[0_14px_32px_rgba(15,31,46,0.08)] sm:min-h-48 sm:px-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--sun-deep)] sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
              </div>
              <p className="display-title text-xl leading-tight text-[var(--sea-ink)] sm:text-2xl">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

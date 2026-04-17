import ImagePlaceholder from './ImagePlaceholder'

const etapas = [
  { year: '2021–2026', title: 'Graduação em Psicologia', place: 'UFJF — Universidade Federal de Juiz de Fora' },
]

export default function SectionFormacao() {
  const formadaImage = encodeURI('/assets/formada.webp')
  return (
    <section id="formacao" className="bg-white py-10 sm:py-15">
      <div className="page-wrap px-4">
        <div className="grid items-center gap-12 bg-[var(--sky-pale)] px-6 py-10 sm:px-12 sm:py-20 lg:grid-cols-2">
          <div className="rise-in relative min-h-[420px] rounded-3xl overflow-hidden bg-[var(--sky-deep)] sm:min-h-[560px] lg:min-h-[640px]">
            <img
              src={formadaImage}
              alt="Formada"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <p className="island-kicker mb-4 text-[var(--sky-deep)]">Trajetória</p>
            <h2 className="display-title mb-6 text-3xl font-medium leading-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
              Psicóloga pela Universidade Federal de Juiz de Fora
            </h2>
            <p className="mb-10 text-base leading-8 text-[var(--ink-soft)]">
           <b>Projetos que fizeram parte da minha jornada:</ b> <br></br>
<b>Dando conta das contas:</b> projeto de extensão da UFJF em parceria com a Prefeitura 
de Juiz de Fora trabalhando Psicologia econômica e financeira na prática <br></br>
<b>Fala Aberta:</b> projeto de extensão da UFJF com o objetivo de sensibilidade a 
comunidade a respeito do assédio <br></br>
<b> Núcleo de Estudos em Violência e Ansiedade Social: 
  </b> projeto da UFJF que une extensão e pesquisa, em que atualmente atuarei como terapeuta principal no Grupo Tímidos, que fornece psicoterapia grupal gratuita para o enfrentamento da ansiedade social <br></br>

            </p>

            <div className="space-y-4">
              {etapas.map(({ year, title, place }) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl border border-[var(--sky-line)] bg-white p-5"
                >
                  <div className="pt-0.5">
                    <span className="island-kicker text-[var(--ink-muted)]">{year}</span>
                  </div>
                  <div>
                    <p className="mb-0.5 font-bold text-[var(--ink)]">{title}</p>
                    <p className="m-0 text-sm text-[var(--ink-soft)]">{place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SectionInicio() {
  const heroImage = encodeURI('/assets/vencendo_humor.webp')
  const logoImage = encodeURI('/assets/logo_white_bg.svg')

  return (
    <section id="inicio" className="bg-[var(--cream)] pb-8 pt-0 sm:pb-12 sm:pt-6">
      <div>
        <div className="relative rounded-b-[2.5rem] sm:rounded-b-none">
          <div className="grid items-stretch lg:grid-cols-[1.2fr_1fr]">
            {/* Left block — flush to the top on mobile, flush to the left on desktop */}
            <div className="rise-in relative min-h-[420px] overflow-hidden rounded-b-[999px] bg-[var(--sky-deep)] sm:min-h-[560px] sm:rounded-b-none lg:min-h-[640px] lg:rounded-r-full">
              <img
                src={heroImage}
                alt="Retrato"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right text block — inverted shape, flush to the right */}
            <div className="rise-in flex items-center justify-center overflow-visible lg:-ml-[85px] lg:z-10">
              <div className="relative flex min-h-[260px] w-full items-center justify-center bg-transparent px-6 sm:justify-start sm:rounded-l-full sm:border-b-2 sm:border-l-2 sm:border-t-2 sm:border-yellow-400 sm:pl-24 sm:pr-0 lg:min-h-[440px] lg:pl-28">
                <div className="relative z-10 flex w-full flex-col items-center text-center">
                  <img
                    src={logoImage}
                    alt="Logo da Psicóloga Mila Kozaka"
                    className="mx-auto mb-8 w-full max-w-[390px] sm:max-w-[380px]"
                  />
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--sky-deep)] px-8 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-[var(--sky)]"
                  >
                    Vamos conversar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

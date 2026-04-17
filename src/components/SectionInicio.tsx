export default function SectionInicio() {
  const heroImage = encodeURI('/assets/a mente vencendo o humor.jpg')

  return (
    <section id="inicio" className="bg-white pb-8 pt-4 sm:pb-12 sm:pt-6">
      <div className="pr-4 sm:pr-6">
        <div className="relative overflow-hidden rounded-r-[2rem]">
          <div className="grid items-stretch lg:grid-cols-[1.2fr_1fr]">
            {/* Left block — flush to the left edge with fully rounded right side */}
            <div className="rise-in relative min-h-[420px] overflow-hidden bg-[var(--sky-deep)] lg:rounded-r-full sm:min-h-[560px] lg:min-h-[640px]">
              <img
                src={heroImage}
                alt="Retrato"
                className="absolute inset-0 h-full w-full object-cover lg:w-[92%]"
              />
            </div>

            {/* Right text card — centered in right half */}
            <div className="rise-in flex items-center justify-center p-6 sm:p-12 lg:p-16">
              <div className="relative w-full max-w-md rounded-[2rem] bg-white px-8 py-12 text-center shadow-[0_20px_60px_rgba(46,157,228,0.15)] sm:px-12 sm:py-16">
                <p className="island-kicker mb-4 text-[var(--sky-deep)]">
                  Psicóloga · CRP 08/XXXXX
                </p>
                <h1 className="display-title mb-8 text-4xl font-medium leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl">
                  Um espaço<br />para cuidar<br />de você
                </h1>
                <a
                  href="#contato"
                  className="inline-block rounded-full bg-[var(--sky-deep)] px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-[var(--sky)]"
                >
                  Vamos conversar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

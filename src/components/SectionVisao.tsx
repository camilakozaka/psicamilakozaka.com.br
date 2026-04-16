export default function SectionVisao() {
  return (
    <section id="sobre" className="section-alt py-20 sm:py-24">
      <div className="page-wrap px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <span className="accent-line" />
            <p className="island-kicker mb-3">Minha visão da terapia</p>
            <h2 className="display-title mb-6 text-4xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              A terapia como um lugar precioso
            </h2>
            <p className="mb-5 text-base leading-8 text-[var(--ink-soft)]">
              Acredito que a terapia é um dos gestos mais corajosos que alguém pode fazer por si mesmo.
              É um espaço onde não há resposta certa, onde o tempo é seu — para pausar, sentir e entender.
            </p>
            <p className="text-base leading-8 text-[var(--ink-soft)]">
              Não estou aqui para dizer o que você deve fazer ou pensar.
              Estou aqui para caminhar junto, com escuta real e presença genuína,
              enquanto você encontra o seu próprio caminho.
            </p>
          </div>

          {/* Visual accent */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-[2.5rem] border border-[var(--sky-line)] bg-[var(--sky-pale)]" />
              <div className="absolute -bottom-4 -right-4 h-48 w-48 rounded-[2rem] border border-[var(--sky-line)] bg-[var(--white)]" />
              <div className="absolute left-8 top-8 font-['Fraunces',Georgia,serif] text-6xl font-bold leading-none text-[var(--sky-deep)] opacity-20 select-none">
                "
              </div>
              <p className="absolute inset-0 flex items-center justify-center px-10 text-center font-['Fraunces',Georgia,serif] text-lg font-medium italic leading-8 text-[var(--ink)]">
                Cada sessão é um ato de cuidado consigo mesmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SectionVisao() {
  return (
    <section id="sobre" className="bg-white pt-8 pb-0">
      <div className="page-wrap px-4">
        {/* Rounded blue surface wrap */}
        <div className="relative overflow-hidden rounded-t-[3rem] bg-[var(--sky-pale)] px-6 py-20 sm:rounded-t-[5rem] sm:px-12 sm:py-28">
          {/* Inner arch ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[85%] w-[90%] -translate-x-1/2 rounded-b-[50%] bg-white/60"
          />

          <div className="relative">
            <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
              <p className="island-kicker whitespace-nowrap text-center text-[var(--ink-muted)] sm:text-left">
                Sua jornada
              </p>

              <h2 className="display-title text-center text-3xl font-medium uppercase leading-[1.05] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
                Construindo um<br />futuro melhor<br />juntos
              </h2>

              <p className="island-kicker whitespace-nowrap text-center text-[var(--ink-muted)] sm:text-right">
                Começa aqui
              </p>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-8 text-[var(--ink-soft)]">
              Acredito que a terapia é um dos gestos mais corajosos que alguém pode fazer por si mesmo.
              Um espaço onde não há resposta certa, onde o tempo é seu — para pausar, sentir e entender.
              Estou aqui para caminhar junto, com escuta real e presença genuína.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

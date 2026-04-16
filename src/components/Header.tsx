
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center justify-between py-3 sm:py-4">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
          Camila Kozaka
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-5 text-sm font-semibold sm:flex">
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#contato" className="nav-link">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

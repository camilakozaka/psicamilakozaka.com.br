import { getWhatsappUrl } from '#/utils/openWhatsapp'

export default function Header() {

  const logoImage = encodeURI('/assets/logo.svg')
  return (
    <header className="  sticky top-0 z-50 border-b border-[var(--line)] bg-[#40A5F2] px-4 backdrop-blur-md">
      <nav className="page-wrap flex items-center justify-between py-4">
        <a
          href="#inicio"
          className="text-sm font-bold text-[var(--ink)] no-underline hover:text-[var(--sky-deep)]"
        >
          <img
            src={logoImage}
            alt="Logo Instrutorz"
            className="block h-16 w-auto"
          />
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#valores" className="nav-link">Valores</a>
          <a href="#temas" className="nav-link">Temas</a>
          <a href="#tcc" className="nav-link">TCC</a>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--sky-deep)] px-5 py-2 text-sm font-bold text-white no-underline transition hover:bg-[var(--sky)]"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}

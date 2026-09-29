import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={close} aria-label="Cut Club início">
        CUT<span>CLUB</span>
      </a>

      <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        <a href="#services" onClick={close}>SERVICES</a>
        <a href="#styles" onClick={close}>STYLES</a>
        <a href="#crew" onClick={close}>CREW</a>
        <a href="#spot" onClick={close}>THE SPOT</a>
      </nav>

      <a className="header-cta" href="#booking">BOOK A CUT <span>↗</span></a>

      <button
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

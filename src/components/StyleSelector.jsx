import { useState } from 'react'
import Reveal from './Reveal'
import './StyleSelector.css'

const styles = [
  {
    name: 'FADE',
    number: '01',
    description: 'Precisão nas laterais. Presença no topo.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'CLASSIC',
    number: '02',
    description: 'Tesoura, textura e uma linha que nunca sai.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'TEXTURED',
    number: '03',
    description: 'Volume, movimento e zero cara de uniforme.',
    image: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'STREET',
    number: '04',
    description: 'Mais atitude. Menos regra.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function StyleSelector() {
  const [active, setActive] = useState(0)
  const current = styles[active]

  return (
    <section className="styles-section section-pad" id="styles">
      <div className="section-kicker"><span>03</span><span>STYLE SELECTOR</span></div>

      <Reveal className="styles-intro">
        <p>YOUR HAIR. YOUR RULES.</p>
        <h2>QUAL É<br /><span>SEU ESTILO?</span></h2>
      </Reveal>

      <div className="style-stage">
        <div className="style-image" style={{ backgroundImage: `url(${current.image})` }}>
          <span className="style-image-index">{current.number} / 04</span>
          <span className="style-image-label">CUT CLUB / ARCHIVE</span>
        </div>

        <div className="style-copy">
          <span className="style-number">{current.number}</span>
          <h3>{current.name}</h3>
          <p>{current.description}</p>
          <a href="#booking">BOOK THIS STYLE ↗</a>
        </div>
      </div>

      <div className="style-tabs" role="tablist" aria-label="Estilos de corte">
        {styles.map((style, index) => (
          <button
            key={style.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? 'is-active' : ''}
            onClick={() => setActive(index)}
          >
            <span>{style.number}</span>{style.name}
          </button>
        ))}
      </div>
    </section>
  )
}

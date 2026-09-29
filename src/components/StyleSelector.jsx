import { useState } from 'react'
import Reveal from './Reveal'
import './StyleSelector.css'

const styles = [
  {
    name: 'FADE',
    number: '01',
    description: 'Precisão nas laterais. Presença no topo.',
    image: 'https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'CLASSIC',
    number: '02',
    description: 'Tesoura, textura e uma linha que nunca sai.',
    image: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D'
  },
  {
    name: 'TEXTURED',
    number: '03',
    description: 'Volume, movimento e zero cara de uniforme.',
    image: 'https://images.unsplash.com/photo-1579119159780-51419861f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dHVyZWQlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D'
  },
  {
    name: 'STREET',
    number: '04',
    description: 'Mais atitude. Menos regra.',
    image: 'https://plus.unsplash.com/premium_photo-1723532445660-3913d3444216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RyZWV0JTIwaGFpcmN1dHxlbnwwfDB8MHx8fDA%3D'
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

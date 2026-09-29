import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onMove = (event) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      hero.style.setProperty('--mx', `${x * 16}px`)
      hero.style.setProperty('--my', `${y * 12}px`)
    }

    hero.addEventListener('pointermove', onMove)
    return () => hero.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section className="hero-section" id="top" ref={heroRef}>
      <div className="hero-noise" />
      <div className="hero-meta hero-meta-left">
        <span>EST. 2026</span>
        <span>FORTALEZA — CE</span>
      </div>
      <div className="hero-meta hero-meta-right">
        <span>BARBER</span>
        <span>CULTURE</span>
        <span>STYLE</span>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-image" role="img" aria-label="Equipamentos de barbearia" />
        <div className="hero-stamp">CUT<br />DIFFERENT</div>
      </div>

      <div className="hero-title">
        <p className="eyebrow">NOT JUST A BARBERSHOP.</p>
        <h1><span>CUT</span><span>CLUB</span></h1>
        <div className="hero-bottom">
          <p>Seu corte. Sua marca.</p>
          <a className="magnetic-link" href="#booking">AGENDAR HORÁRIO <span>↗</span></a>
        </div>
      </div>

      <div className="scroll-cue"><span>SCROLL</span><i /></div>
      <div className="hero-marquee" aria-hidden="true">
        <div>CUT DIFFERENT — CUT DIFFERENT — CUT DIFFERENT — CUT DIFFERENT — </div>
      </div>
    </section>
  )
}

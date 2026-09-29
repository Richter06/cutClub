import Reveal from './Reveal'
import './Crew.css'

const crew = [
  ['01', 'MARCOS', 'FADE / DESIGN', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=85'],
  ['02', 'CAIO', 'CLASSIC / SCISSOR', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85'],
  ['03', 'LEO', 'BEARD / TEXTURE', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85'],
]

export default function Crew() {
  return (
    <section className="crew section-pad" id="crew">
      <div className="section-kicker"><span>05</span><span>THE CREW</span></div>
      <Reveal className="crew-heading">
        <p>MEET THE HANDS BEHIND THE CUT.</p>
        <h2>THE<br /><span>CREW.</span></h2>
      </Reveal>

      <div className="crew-grid">
        {crew.map(([number, name, specialty, image], index) => (
          <Reveal key={name} className="crew-card" delay={index * 90}>
            <div className="crew-image">
              <img src={image} alt={name} />
              <span>{number}</span>
            </div>
            <div className="crew-info">
              <h3>{name}</h3>
              <p>{specialty}</p>
              <span>AVAILABLE FOR BOOKINGS ↗</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

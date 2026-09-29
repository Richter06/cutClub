import Reveal from './Reveal'
import './Gallery.css'

const shots = [
  ['01', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=85', 'THE FADE'],
  ['02', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85', 'THE CLASSIC'],
  ['03', 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=85', 'THE TEXTURE'],
  ['04', 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85', 'THE STREET'],
]

export default function Gallery() {
  return (
    <section className="gallery section-pad">
      <div className="section-kicker"><span>04</span><span>THE CUTS</span></div>
      <Reveal className="gallery-heading">
        <p>NO TWO CUTS ARE THE SAME.</p>
        <h2>THE<br /><span>ARCHIVE.</span></h2>
      </Reveal>

      <div className="gallery-grid">
        {shots.map(([number, image, title], index) => (
          <Reveal key={number} className={`gallery-card gallery-card-${index + 1}`} delay={index * 80}>
            <a href="#booking">
              <img src={image} alt={`${title} — Cut Club`} />
              <span className="gallery-number">{number}</span>
              <span className="gallery-title">{title} ↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

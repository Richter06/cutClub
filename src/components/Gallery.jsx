import Reveal from './Reveal'

import './Gallery.css'

const shots = [
  [
    '01',
    'https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'THE FADE',
  ],
  [
    '02',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85',
    'THE CLASSIC',
  ],
  [
    '03',
    'https://images.unsplash.com/photo-1579119159780-51419861f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dHVyZWQlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D',
    'THE TEXTURE',
  ],
  [
    '04',
    'https://plus.unsplash.com/premium_photo-1723532445660-3913d3444216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RyZWV0JTIwaGFpcmN1dHxlbnwwfDB8MHx8fDA%3D',
    'THE STREET',
  ],
  [
    '05',
    'https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'THE DETAIL',
  ],
  [
    '06',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85',
    'THE CLEAN',
  ],
  [
    '07',
    'https://images.unsplash.com/photo-1562696676-727312caede0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vaGF3ayUyMGhhaXJjdXR8ZW58MHwwfDB8fHww',
    'THE EDGE',
  ],
  [
    '08',
    'https://images.unsplash.com/flagged/photo-1573081107259-b49d86088ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpbmUlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D',
    'THE LINE',
  ],
  [
    '09',
    'https://plus.unsplash.com/premium_photo-1661347877341-849d966033ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D',
    'THE FORM',
  ],
  [
    '10',
    'https://images.unsplash.com/photo-1638620259504-4f6854fa7996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwaGFpcmN1dHxlbnwwfDB8MHx8fDA%3D',
    'THE LOOK',
  ],
  [
    '11',
    'https://images.unsplash.com/photo-1541784493975-77e8adc9e23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyZWFkbG9ja3MlMjBoYWlyY3V0fGVufDB8MHwwfHx8MA%3D%3D',
    'THE MOOD',
  ],
  [
    '12',
    'https://images.unsplash.com/photo-1648157963892-fa90a04e278b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11bGxldCUyMGhhaXJjdXR8ZW58MHwwfDB8fHww',
    'THE ATTITUDE',
  ],
]

export default function Gallery() {
  const featuredShots = shots.slice(0, 4)
  const archiveShots = shots.slice(4)

  return (
    <section className="gallery section-pad">
      <div className="section-kicker">
        <span>04</span>
        <span>THE CUTS</span>
      </div>

      <Reveal className="gallery-heading">
        <p>NO TWO CUTS ARE THE SAME.</p>

        <h2>
          THE
          <br />
          <span>ARCHIVE.</span>
        </h2>
      </Reveal>

      {/* FEATURED */}
      <div className="gallery-grid gallery-grid-featured">
        {featuredShots.map(([number, image, title], index) => (
          <Reveal
            key={number}
            className={`gallery-card gallery-card-${index + 1}`}
            delay={index * 80}
          >
            <a href="#booking">
              <img src={image} alt={`${title} — Cut Club`} />

              <span className="gallery-number">
                {number}
              </span>

              <span className="gallery-title">
                {title} ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* ARCHIVE FEED */}
      <div className="gallery-archive">
        {archiveShots.map(([number, image, title], index) => (
          <Reveal
            key={number}
            className={`archive-card archive-card-${index + 1}`}
            delay={(index % 4) * 70}
          >
            <a href="#booking">
              <img src={image} alt={`${title} — Cut Club`} />

              <span className="gallery-number">
                {number}
              </span>

              <span className="gallery-title">
                {title} ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
import Reveal from './Reveal'
import './Services.css'

const services = [
  ['01', 'THE CUT', 'Corte + acabamento', 'R$ 45', '45 min'],
  ['02', 'THE BEARD', 'Barba + toalha quente', 'R$ 30', '30 min'],
  ['03', 'THE COMBO', 'Corte + barba', 'R$ 65', '70 min'],
  ['04', 'THE DETAIL', 'Acabamento + desenho', 'R$ 20', '20 min'],
]

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-kicker"><span>02</span><span>SERVICES / 04</span></div>
      <Reveal className="section-heading">
        <p>NO FLUFF. JUST THE ESSENTIALS.</p>
        <h2>CHOOSE<br /><span>YOUR CUT.</span></h2>
      </Reveal>

      <div className="services-list">
        {services.map(([number, title, description, price, duration]) => (
          <Reveal key={number} delay={Number(number) * 60}>
            <article className="service-row">
              <span className="service-number">{number}</span>
              <div className="service-name">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="service-duration">{duration}</span>
              <strong className="service-price">{price}</strong>
              <a href="#booking" aria-label={`Agendar ${title}`}>↗</a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

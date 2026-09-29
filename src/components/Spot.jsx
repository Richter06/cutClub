import Reveal from './Reveal'
import './Spot.css'

export default function Spot() {
  return (
    <section className="spot section-pad" id="spot">
      <div className="section-kicker"><span>07</span><span>THE SPOT</span></div>
      <div className="spot-grid">
        <Reveal className="spot-photo">
          <div role="img" aria-label="Interior da Cut Club" />
          <span>THE SPOT / 01</span>
        </Reveal>
        <Reveal className="spot-info" delay={100}>
          <p className="spot-label">COME THROUGH.</p>
          <h2>NA RUA.<br /><span>NO CORTE.</span></h2>
          <p className="spot-description">
            Um espaço feito para cortar, trocar ideia, ouvir música e sair
            daqui um pouco mais afiado do que entrou.
          </p>
          <div className="spot-details">
            <div><span>ADDRESS</span><strong>R. EXEMPLO, 120<br />FORTALEZA — CE</strong></div>
            <div><span>HOURS</span><strong>SEG — SÁB<br />09:00 — 20:00</strong></div>
          </div>
          <a className="spot-link" href="#booking">COMO CHEGAR ↗</a>
        </Reveal>
      </div>
    </section>
  )
}

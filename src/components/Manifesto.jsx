import Reveal from './Reveal'
import './Manifesto.css'

export default function Manifesto() {
  return (
    <section className="manifesto section-pad">
      <div className="section-kicker"><span>01</span><span>THE CODE</span></div>
      <Reveal className="manifesto-copy">
        <p className="manifesto-label">A BARBERSHOP FOR THE ONES WHO SHOW UP.</p>
        <h2>Não é só cabelo.<br /><em>É presença.</em></h2>
        <p className="manifesto-text">
          O corte é só o começo. A rua, a música, a roupa, a atitude.
          O Cut Club nasceu para quem entende que estilo não termina
          quando você sai da cadeira.
        </p>
      </Reveal>
      <div className="manifesto-side">
        <span>01 / 04</span>
        <strong>BUILT<br />FOR<br />THE<br />STREETS.</strong>
      </div>
    </section>
  )
}

import Reveal from './Reveal'

import './Booking.css'

export default function Booking() {
  return (
    <section className="booking section-pad" id="booking">
      <div className="booking-grid">
        <Reveal className="booking-title">
          <span className="booking-index">06 / BOOKING</span>

          <h2>
            YOUR NEXT
            <br />
            <em>CUT</em>
            <br />
            STARTS HERE.
          </h2>
        </Reveal>

        <Reveal className="booking-card" delay={120}>
          <p>READY WHEN YOU ARE.</p>

          <h3>
            BOOK
            <br />
            THE
            <br />
            CHAIR.
          </h3>

          <a
            className="booking-button"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR PELO WHATSAPP <span>↗</span>
          </a>

          <small>SEG — SÁB / 09:00 — 20:00</small>
        </Reveal>
      </div>
    </section>
  )
}
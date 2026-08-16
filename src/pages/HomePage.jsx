import { Link } from "react-router-dom";

const highlights = [
  {
    number: "01",
    title: "Selección honesta",
    text: "Pocas botellas, bien elegidas. Cada etiqueta tiene un motivo para estar aquí.",
  },
  {
    number: "02",
    title: "Envío cuidado",
    text: "Empacamos cada pedido como si cruzara la mesa de alguien que queremos.",
  },
  {
    number: "03",
    title: "Consejo cercano",
    text: "¿No sabes qué abrir? Escríbenos y encontraremos tu próxima favorita.",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="container hero-section__content">
          <p className="eyebrow">Desde 2018 · Destilados con historia</p>
          <h1>
            Brindis que
            <br />
            <em>se quedan por siempre.</em>
          </h1>
          <p className="hero-section__copy">
            Casa Brava reúne vinos y destilados para esos momentos que merecen
            una botella especial. Sin ruido. Con criterio.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/catalog">
              Explorar colección <span>↗</span>
            </Link>
            <Link className="text-link" to="/about">
              Conoce nuestra historia <span>→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span>✦</span> Curaduría independiente
            <br />
            para paladares curiosos
          </div>
        </div>
        <div className="hero-bottle" aria-hidden="true">
          <span>
            CASA
            <br />
            BRAVA
          </span>
          <small>
            RESERVA
            <br />
            ESPECIAL
          </small>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          SABOR
          <br />
          SIN PRISA
        </div>
      </section>
      <section className="highlights-section container">
        <div className="section-label">
          <span>Lo que nos importa</span>
          <span>01 — 03</span>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight" key={item.number}>
              <span className="highlight__number">{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="invite-section">
        <div className="container invite-section__inner">
          <p className="eyebrow">La próxima botella</p>
          <h2>
            Hay una historia
            <br />
            <em>esperándote.</em>
          </h2>
          <Link
            className="round-link"
            to="/catalog"
            aria-label="Ir al catálogo"
          >
            ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro container">
        <p className="eyebrow">Manifiesto Casa Brava</p>
        <h1>
          Beber bien
          <br />
          <em>es estar presente.</em>
        </h1>
        <p className="about-lead">
          Nacimos de una sobremesa larga y de una pregunta sencilla: ¿por qué
          las buenas botellas tenían que sentirse tan lejanas?
        </p>
      </section>
      <section className="about-story">
        <div className="container about-story__grid">
          <div className="about-year">
            2026
            <br />
            <span>Madrid · Bogotá · Monteria</span>
          </div>
          <div>
            <p className="eyebrow">Nuestra forma de hacer las cosas</p>
            <h2>El ritual importa tanto como el líquido.</h2>
            <p>
              Buscamos productores que hacen las cosas a su ritmo: bodegas
              familiares, maestros destiladores y proyectos que respetan el
              origen. Luego acercamos sus botellas a tu mesa sin complicarlas.
            </p>
            <p>
              Casa Brava es una tienda, sí. Pero también es una invitación a
              bajar el volumen, servir otra ronda y descubrir algo nuevo.
            </p>
            <Link className="text-link" to="/catalog">
              Ver la selección <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="values-section container">
        <p className="eyebrow">Nuestros principios</p>
        <div className="values-grid">
          <div>
            <strong>01</strong>
            <h2>Origen antes que moda</h2>
            <p>
              La procedencia, el oficio y el sabor siempre tienen la última
              palabra.
            </p>
          </div>
          <div>
            <strong>02</strong>
            <h2>Curiosidad sin pretensión</h2>
            <p>
              Te hablamos claro para que elegir una botella sea una experiencia,
              no un examen.
            </p>
          </div>
          <div>
            <strong>03</strong>
            <h2>Compartir es la medida</h2>
            <p>
              Una buena botella mejora cuando encuentra a las personas
              adecuadas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

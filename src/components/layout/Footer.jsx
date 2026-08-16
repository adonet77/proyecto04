import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link to="/" className="site-footer__brand">
          <span className="brand__mark">CB</span>
          <span>Casa Brava</span>
        </Link>
        <div className="site-footer__contact">
          <a
            href="https://www.instagram.com/Licorera/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span>@Licorera</span>
          </a>
          <a href="tel:+573187693181">
            Móvil <span>318 769 31 81</span>
          </a>
        </div>
        <p className="site-footer__legal">
          Destilados con historia · Hecho para compartir
        </p>
      </div>
    </footer>
  );
}

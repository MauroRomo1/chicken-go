import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container p-3">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <img
              src="/logo.png"
              alt="Logo de un pollo corriendo"
              className="mx-auto d-block"
              width="150"
              height="150"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 text-center">
            <h5>Mas opciones</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link moreOptions" to="*">
                  Quienes somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link moreOptions" to="*">
                  Terminos y condiciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link moreOptions" to="*">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mb-4 text-center">
            <h5>Redes sociales</h5>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="nav-link text-primary"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="nav-link text-info"
                >
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="nav-link text-danger"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

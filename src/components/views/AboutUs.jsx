import "../../css/aboutUs.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <>
      <div className="banner">
        <img
          src="https://wallpaperaccess.com/full/1102024.jpg"
          alt="Banner Image"
        />
        <div className="overlay"></div>
        <div className="text-over text-center text-white">
          <h5>Todo lo malo tiene su ultima linea</h5>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex">
          <div className="col d-flex justify-content-center">
            <div className="card shadow border border-3 border-danger">
              <img
                src="https://trello.com/1/cards/6500cf405d7fd3024f279b1c/attachments/6507820285590bac1178e560/previews/6507820385590bac1178e616/download/perfil-dharez.jpg"
                className="card-img-top"
                alt="foto de perfil"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mauro Agustín Romo</h5>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link text-dark"
                      href="https://github.com/MauroRomo1"
                      target="_black"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.linkedin.com/in/mauro-romo-dharez/"
                      target="_black"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

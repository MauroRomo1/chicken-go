import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [userLogin, setuserLogin] = useState(null);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" end to="/">
            <img
              src="/logo.png"
              alt="Logo de un pollo corriendo"
              width="80"
              height="80"
              className="d-inline-block align-text-center"
            />
            CHICKEN
            <span className="text-danger"> GO!</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  Sobre nosotros
                </NavLink>
              </li>

              {userLogin ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faCircleUser}
                      size="lg"
                    />
                    {userLogin.name}
                  </a>
                  <ul className="dropdown-menu bg-body-tertiary dropdown-menu-end text-center">
                    <li>
                      <Link className="dropdown-item" to="*">
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      {userLogin.rol === "Administrador" ? (
                        <Link className="dropdown-item" to="/">
                          Administracion
                        </Link>
                      ) : (
                        <Link className="dropdown-item" to="/">
                          Mis pedidos
                        </Link>
                      )}
                    </li>
                    <li>
                      <button className="btn btn-danger" type="button">
                        Cerrar sesion
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink end to="/login">
                      <button
                        className="btn btn-outline-secondary me-2 mb-2"
                        type="button"
                      >
                        Iniciar sesion
                      </button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink end to="/register">
                      <button className="btn btn-danger me-2" type="button">
                        Registrarse
                      </button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

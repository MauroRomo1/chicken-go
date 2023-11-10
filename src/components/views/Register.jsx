import {
  faCircleUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  useEffect(() => {
    document.title = "Chicken go | Registro";
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-11 border shadow">
          <div className="row">
            <div className="col-12 col-lg-6 border">
              <img
                src="https://www.pngkey.com/png/detail/233-2332677_ega-png.png"
                alt=""
                className="img-fluid"
              />
              <h5 className="text-center my-3">
                regístrate y disfruta de los mejores beneficios
              </h5>
            </div>
            <div className="col-12 col-lg-6 border">
              <h6 className="text-center my-3">Formulario para registrarse</h6>
              <Form noValidate>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>
                    <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                    Nombre
                  </Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>
                    <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                    Apellido
                  </Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apelido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Correo electronico
                  </Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>
                    <FontAwesomeIcon icon={faKey} className="me-2" />
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese una contraseña"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordConfirm">
                  <Form.Label>
                    <FontAwesomeIcon icon={faKey} className="me-2" />
                    Confirmar contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repita la contraseña"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkTerms">
                  <Form.Check type="checkbox" label="Aceptó los términos y condiciones" />
                </Form.Group>
                <div className="d-grid mx-auto col col-md-8 my-3">
                  <Button type="submit">Regístrarse</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import "../../styles/register.css";
import {
  faCircleUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  useEffect(() => {
    document.title = "Chicken go | Registro";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (user) => {
    user.rol = "usuario";
    console.log(user);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-11 border shadow">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center border">
              <img
                src="/chicken-register.png"
                alt="un celular y un pollo dando el Okay"
                className="img-fluid mx-auto d-block p-3 chickienRegister"
              />
            </div>
            <div className="col-12 col-lg-6 border">
              <h6 className="text-center my-3">
                Regístrate y disfruta de los mejores beneficios
              </h6>
              <Form
                className="formRegister"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>
                    <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                    Nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={errors.name}
                    placeholder="Ingrese su nombre"
                    {...register("name", {
                      required: "El nombre es un dato obligatorio.",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Solo se permiten letras en el nombre.",
                      },
                      minLength: {
                        value: 2,
                        message: "El nombre debe de tener minimo 2 caracteres.",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "El nombre debe de tener maximo 20 caracteres.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Label>
                    <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                    Apellido
                  </Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={errors.lastname}
                    placeholder="Ingrese su apelido"
                    {...register("lastname", {
                      required: "El apellido es un dato obligatorio.",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Solo se permiten letras en el apellido.",
                      },
                      minLength: {
                        value: 2,
                        message:
                          "El apellido debe de tener minimo 2 caracteres.",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "El apellido debe de tener maximo 20 caracteres.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastname?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Correo electronico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    isInvalid={errors.email}
                    placeholder="Ingrese su email"
                    {...register("email", {
                      required: "El correo electronico es un dato obligatorio.",
                      pattern: {
                        value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/i,
                        message:
                          "El correo electrónico no cumple con un formato valido.",
                      },
                      minLength: {
                        value: 6,
                        message:
                          "El correo electrónico debe de tener minimo 6 caracteres.",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "El correo electrónico debe de tener maximo 100 caracteres.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>
                    <FontAwesomeIcon icon={faKey} className="me-2" />
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    isInvalid={errors.password}
                    placeholder="Ingrese una contraseña"
                    {...register("password", {
                      required: "La contraseña es un dato obligatorio.",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe de de tener minimo 8 caracteres.",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La contraseña debe de de tener maximo 50 caracteres.",
                      },
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S+$/,
                        message:
                          "La contraseña debe tener al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordConfirm">
                  <Form.Label>
                    <FontAwesomeIcon icon={faKey} className="me-2" />
                    Confirmar contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    isInvalid={errors.passwordConfirm}
                    placeholder="Repita la contraseña"
                    {...register("passwordConfirm", {
                      required:
                        "La repeticion de la contraseña es obligatoria.",
                      validate: (value) =>
                        value === watch("password") ||
                        "Las contraseñas no coinciden.",
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirm?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkTerms">
                  <Form.Check
                    type="checkbox"
                    isInvalid={errors.checkTerms}
                    label="Aceptó los términos y condiciones"
                    {...register("checkTerms", {
                      required: "Debes de aceptar los terminos y condiciones.",
                    })}
                  />
                  <Form.Text className="text-danger" type="invalid">
                    {errors.checkTerms?.message}
                  </Form.Text>
                </Form.Group>
                <div className="d-grid mx-auto col col-md-8 my-3">
                  <Button className="btnSubmit" type="submit">
                    Regístrarse
                  </Button>
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

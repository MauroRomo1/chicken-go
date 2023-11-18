import { Link } from "react-router-dom";
import "../../css/error404.css";

const Error404 = () => {
  return (
    <div className="container my-5">
      <img src="/error404.gif" alt="" className="img-fluid d-flex mx-auto" />
      <h2 className="text-center my-4">
        ERROR <span className="error-text">404!</span>
      </h2>
      <div className="d-grid col-md-6 col-lg-4 mx-auto">
        <Link to={'/'} className="btn btnGoBack">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Error404;

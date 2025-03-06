import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="col-lg-6 mx-auto my-5 text-center">
        <h2><span className="text-info">Oops!</span> Looks like you've lost your way!</h2>
        <p className="lead display-lg-6 display-sm-0">
          Sorry, we couldn't find the page you're looking for
        </p>
        <Link to="/" className="btn text-light btn-lg btn-info fw-bold mt-2">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;

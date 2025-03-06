import { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [showAuthBtn, setshowAuthBtn] = useState(false);
  const navigate = useNavigate(); 

  const handleGestarted = () => {
    setshowAuthBtn(true);
    navigate("/signup");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-3">
        <div className="container-fluid px-5 justify-space-between">
          <Link to="" className="navbar-brand w-25 logo_link">
            <img src={require("../IMAGES/cdt_logo.png")} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {showAuthBtn ? (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0  justify-content-end w-100 align-items-center">
                {/* conditional signup page route */}
                <>
                  <li className="nav-item ">
                    <Link to="/courses" className="nav-link">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item mx-1 px-2 my-1">
                    <NavLink
                      to="/signup"
                      className="nav-link btn w-md-50 rounded-0 border fw-bold"
                    >
                      Sign Up
                    </NavLink>
                    {/* <Link
                      to="/signup"
                      className="nav-link btn btn-outline-info w-md-50 rounded-0 border fw-bold "
                    >
                      Sign Up
                    </Link> */}
                  </li>
                  <li className="nav-item mx-1 px-2 text-center my-1">
                    <NavLink
                      to="/login"
                      className="nav-link btn border fw-bold "
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              </ul>
            ) : (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-75 justify-content-around">
                <>
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      Courses
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      Testimonials
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      Continue Learning
                    </Link>
                  </li>
                </>
              </ul>
            )}

            {!showAuthBtn && (
              <button
                className="btn btn-outline-primary rounded-0 border-2"
                type="submit"
                onClick={handleGestarted}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

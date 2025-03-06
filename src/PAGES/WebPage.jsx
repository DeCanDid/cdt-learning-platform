import { NavLink, Outlet } from "react-router-dom";

const WebPage = () => {
  const activeLink = {
    textDecoration: "underline",
    color: "2px solid black",
  };

  return (
    <>
      <div className="container-xxl py-4">
        {/* <div className="circle"></div> */}
        <div className="row container mx-auto p-3 justify-content-between">
          <div className="col-lg-6 col-sm-6 mb-4 col-md-6">
            <h1 className="display-5 fw-bold text-black mb-4">
              Empower Your Future: Tech Skills for Tomorrow, Today
            </h1>
            <p className="lead mb-4">
              You're closer than you think! Every lesson brings new skills,
              real-world insights, and opportunities. Stay the course, and watch
              your knowledge turn into expertise. Let's finish strong—your
              future self will thank you!
            </p>
            <button className="btn btn-primary rounded-0 fw-bold">
              Get Started
            </button>
            <button className="btn btn-outline-secondary mx-2 rounded-0 fw-bold">
              Learn more
            </button>
          </div>

          <div className="col-lg-5 col-sm-6 text-end col-md-6 text-md-center">
            <img
              src={require("../IMAGES/girl_img.png")}
              alt="A person sitting cross-legged with a laptop, smiling confidently"
              className="img-fluid rounded-circle"
              style={{ width: "300px" }}
            />
          </div>
        </div>
      </div>

      <section className="container">
        <div className="row">
        <div>
          <NavLink
            to="explore-courses"
            style={({ isActive }) => (isActive ? activeLink : undefined)}
          >
            Explore Courses
          </NavLink>
        </div>

        <Outlet/>
        </div>
      </section>
    </>
  );
};

export default WebPage;

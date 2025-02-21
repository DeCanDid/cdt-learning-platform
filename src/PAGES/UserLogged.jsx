import { Link, Outlet, NavLink } from "react-router-dom";
import './Style.css'

const UserLogged = () => {
  const activeLink = {
    textDecoration: "underline",
    color: "2px solid black",
  };

  const userLastName = 'Miracle';
  return (
    <>
      <section className="newUser_section">
        <div>
          <div>
            <h2>Welcome {userLastName},</h2>
            <h6>
              An hour of study, regualrly, takes you a step closer to achieve
              your tech goals...
            </h6>
          </div>

          <div>
            <div className="nested_link">
              <div>
                <NavLink
                  to="all-courses"
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  All Courses
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="continue-learning"
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  Continue Learning
                </NavLink>
              </div>
            </div>

            <Outlet />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogged;

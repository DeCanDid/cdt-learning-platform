import { Link, Outlet, NavLink } from "react-router-dom";
import "./Style.css";
import { useState, useEffect } from "react";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const UserLogged = () => {
  const [userProfile, setuserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const activeLink = {
    textDecoration: "underline",
    color: "2px solid black",
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("No user found:");
        setuserProfile(null)
        setLoading(false)

        return;
      }

        console.log("user found:", user);
        try {
          const docRef = doc(db, "Users", user.uid);
          const docDetail = await getDoc(docRef);

          if (docDetail.exists()) {
            setuserProfile(docDetail.data());
            console.log("user data", docDetail.data());
          } else {
            console.log("User does not exist in firestore");
            setuserProfile(null);
          }
        } catch (error) {
          console.log("user does not exist", error);
        }
        setLoading(false);
    });

    // clean up listener on component unmount
    return ()=> unsubscribe()
  }, []);

  return (
    <>
      {loading && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050, // Higher than other elements
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <div className="modal-body">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="newUser_section">
        {
          userProfile ? (
          <div>
            <div className="welcome">
              <h2>Welcome {userProfile.lastname}</h2>
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
                    style={({ isActive }) =>
                      isActive ? activeLink : undefined
                    }
                  >
                    All Courses
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="continue-learning"
                    style={({ isActive }) =>
                      isActive ? activeLink : undefined
                    }
                  >
                    Continue Learning
                  </NavLink>
                </div>
              </div>

              <Outlet />
            </div>
          </div>
        ): (
          <p>No user profile found. Please log in.</p>
        )}
      </section>
    </>
  );
};

export default UserLogged;

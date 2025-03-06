import { createUserWithEmailAndPassword } from "firebase/auth";
import "./formStyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Email and password are required.");

      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: firstname,
          lastname: lastname,
        });
      }
      console.log("User registered successfully!");
      toast.success("User Registered successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <div className="containter my-5">
        <div className="row w-100  justify-content-around align-items-center">
          <div className="col-md-5 signup_img">
            <img
              src={require("../IMAGES/young_african.png")}
              alt="A person lying down and using a laptop"
              className="position-relative"
            />
          </div>

          <div className="col-md-5 p-4">
            <h2 className="text-center font-weight-bold mb-4">
              Start Learning
            </h2>
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="form-group">
                <label className="text-gray-700 fw-bold">Firstname</label>
                <input
                  type="text"
                  onChange={(e) => setfirstname(e.target.value)}
                  value={firstname}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  required
                />
              </div>

              <div className="form-group">
                <label className="text-gray-700 fw-bold">Lastname</label>
                <input
                  type="text"
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-gray-700 fw-bold">Email address</label>
                <input
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-gray-700 fw-bold">Password</label>
                <input
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-gray-700 fw-bold">
                  Confirm password
                </label>
                <input
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-0">
                Signup
              </button>
            </form>
            <p className="mt-4 text-center text-gray-700">
              Continue my course.{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

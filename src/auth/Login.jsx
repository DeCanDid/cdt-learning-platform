import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React from 'react';
import { useState } from 'react';
import { auth } from "./firebase";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = async(e)=>{
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = '/userLoggedIn'
            toast.success("User Logged in successfully!!", {
                position: "top-center",
              });
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
        position: "bottom-center",
      });
        }
    }
  return (
    <>

<div className='containter my-5'>
        <div className="row w-100  justify-content-around align-items-center">
          <div className="col-md-5 login_img">
             
              <img
                src={require("../IMAGES/young_girl2.png")}
                alt="A person lying down and using a laptop"
                className="position-relative"
              />
           
          </div>

          <div className="col-md-5 p-4">
            <h2 className="text-center font-weight-bold mb-4">
              Continue Learning
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>

              <div className="form-group">
                <label className="text-gray-700 fw-bold">Email</label>
                <input
                  type="email"
                  onChange={(e)=>setemail(e.target.value)}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  value={email}
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-gray-700 fw-bold">Password</label>
                <input
                  type="password"
                  onChange={(e)=>setpassword(e.target.value)}
                  className="form-control rounded-0 mb-4"
                  placeholder="Input here..."
                  value={password}
                  required
                />
                <small>Forgot Password?</small>
              </div>
             
              <button type="submit" className="btn btn-primary w-100 rounded-0">
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-700">
              I'm a new user.{" "}
              <Link to="/signup" className="text-primary">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
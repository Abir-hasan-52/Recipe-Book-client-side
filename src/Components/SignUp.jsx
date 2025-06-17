import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router"; 

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setPasswordError("");  
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

     
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

     
    createUser(email, password)
      .then((result) => {
        
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Profile saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
         
        console.log(errorCode);
      });
  };

  const handleWithGoogl = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successFull ",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 flex justify-center items-center  mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          {/* photo url */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          {/* Contract */}
          <label className="label">Contract</label>
          <input
            type="text"
            name="contact"
            className="input"
            placeholder="Contract Number"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          {/* Password error message */}
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}

          <button className="btn btn-neutral mt-4">SignUp</button>
          <div>
            <p className="link text-md link-hover">
              Have an Account?
              <Link className="text-yellow-600 " to="/signin">
                LogIn
              </Link>
            </p>
          </div>
          <div>
            <p className="text-2xl text-center font-bold text-cyan-400">or</p>
            <button
              onClick={handleWithGoogl}
              className="btn btn-primary w-full mt-4"
              type="button"
            >
              signIn with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

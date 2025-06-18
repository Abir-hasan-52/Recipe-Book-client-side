import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import lottieRegister from "../assets/lottie/register.json";
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
   
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
   const location =useLocation();
    const navigate= useNavigate();
    console.log(location);
  
  
    const from = location.state || '/';

  const handleSignUp = (e) => {
    e.preventDefault();
    setPasswordError("");

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo, contact } = Object.fromEntries(
      formData.entries()
    );

    // password validations
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

    // create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo || "https://i.ibb.co/Yty7Kf5/default-avatar.png",
        })
          .then(() => {
             
            const userProfile = {
              name,
              photo,
              email,
              contact,
              creationTime: createdUser.metadata?.creationTime,
              lastSignInTime: createdUser.metadata?.lastSignInTime,
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
                  navigate(from);
                }
              });
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
      });
  };

  const handleWithGoogl = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google SignIn error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center gap-4 my-10">
      <div className="card bg-base-100 flex justify-center items-center  mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <form onSubmit={handleSignUp}>
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            {/* contact */}
            <label className="label">Contact</label>
            <input
              type="text"
              name="contact"
              className="input"
              placeholder="Contact Number"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            {/* Password error message */}
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}

            <button className="btn w-full btn-neutral mt-4" type="submit">
              Sign Up
            </button>
            <div>
              <p className="link text-md link-hover mt-2">
                Have an Account?{" "}
                <Link className="text-yellow-600 " to="/signin">
                  Log In
                </Link>
              </p>
            </div>
            <div>
              <p className="text-2xl text-center font-bold text-cyan-400 mt-2">
                or
              </p>
              <button
                onClick={handleWithGoogl}
                className="btn btn-primary w-full mt-4"
                type="button"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Lottie animationData={lottieRegister} loop={true} className="w-96" />
      </div>
    </div>
  );
};

export default SignUp;

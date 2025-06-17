import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import lottieLogin from "../assets/lottie/login.json";
import Lottie from "lottie-react";

const Signin = () => {
  const { signIn, signInWithGoogle } = use(AuthContext);
  const location =useLocation();
  const navigate= useNavigate();
  console.log(location);


  const from = location.state || '/';
   
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successFull ",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWithGoogl = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
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
        console.log(error)
      });
  };
  return (
    <div className="flex justify-center items-center gap-4 my-10">
      <div className=" card bg-base-100 flex  col mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <form onSubmit={handleSignIn} className="fieldset">
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

            <button className="btn btn-neutral mt-4">SignIn</button>
            <div>
              <p className="link text-md link-hover">
                Don't Have an Account please!
                <Link className="text-yellow-600 " to="/signup">
                  SignUp
                </Link>
              </p>
            </div>

            <div>
              <p className="text-2xl text-center font-bold text-cyan-400">or</p>
              <button
                onClick={handleWithGoogl}
                className="btn btn-primary w-full mt-4"
              >
                signIn with Google
              </button>
            </div>
          </form>
        </div>
         
      </div>
      <div>
          <Lottie animationData={lottieLogin} loop={true} className="w-96">

          </Lottie>
        </div>
    </div>
  );
};

export default Signin;

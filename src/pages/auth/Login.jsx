import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const location = useLocation();
  const { signin, googleSignIn } = useContext(Authcontext);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((res) => {
        toast.success("Welcome back!");
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        setError(error.code);
        toast.error("Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-center text-[30px] text-red-600">
          Welcome Back!
        </h2>
        <p className="text-center font-semibold text-lime-500">
          Log in to your Toy World
        </p>

        <form className="card-body" onSubmit={handlelogin}>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full rounded-[20px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label text-black font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} 
                name="password"
                className="input w-full rounded-[20px] pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-red-600"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center">Forgot password?</p>


            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            <button
              type="submit"
              className="btn text-white mt-4 w-full rounded-[20px] bg-red-600"
            >
              Let's Go! 🚀
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline mt-3 w-full rounded-[20px]"
            >
              Continue with Google
            </button>

            <Link
              to="/auth/register"
              className="block text-center text-pink-500 font-medium text-sm pt-3 hover:underline"
            >
              Don’t Have An Account ? Register
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
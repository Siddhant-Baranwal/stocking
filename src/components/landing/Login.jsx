import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { notification } from "antd";
import { auth, GoogleAuthProvider } from "../../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    b,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [Userobj, setUserObj] = useState(null);
  const navigate = useNavigate();
  const [isemailVerified, setisEmailVerified] = useState(false);

  const [OTP, setOTP] = useState(new Array(6).fill(""));

  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOTP = [...OTP];
    newOTP[index] = element.value;
    setOTP(newOTP);

    // Move to the next input field if a number is entered
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const connectUrl = async (str, payload) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/${str}`,
      payload,
      config
    );
    return data;
  };

  const secondVerification = async (User) => {
    try {
      console.log(OTP);
      console.log(Number(OTP.join("")));
      const isQRverified = await connectUrl("auth/2fa/verify", {
        userId: User.user.userId,
        token: Number(OTP.join("")),
      });
      console.log(isQRverified);
      if (isQRverified.verified) {
        localStorage.setItem("userinfo", JSON.stringify(User));
        notification.success({
          message: "2nd Verification done!",
          description: "Verified through QR succesfuly!",
        });
        setIsLoading(false);
        navigate("/dashboard");
      }
    } catch (error) {
      notification.error({
        message: "Error Occcured!",
      });
      console.log(error);
      setIsLoading(false);
    }
  };

  const onSubmit = async (obj) => {
    setIsLoading(true);
    try {
      // fetching the user in authentication db
      const UserinAdb = await connectUrl("auth/signin", obj);
      console.log(UserinAdb);

      if (UserinAdb.emailVerified) {
        const User = await connectUrl("user/add", obj);
        console.log(User);
        setisEmailVerified(true);
        setUserObj(User);
      } else {
        notification.error({
          message: "Invalid Credentials!",
          description: "Invalid Email/password  Retry!",
        });
        setIsLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Error Occcured!",
      });
      setIsLoading(false);
    }
  };

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with popup
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setisEmailVerified(true);
      // to store user in db
      const User = await connectUrl("user/add", {
        name: result.user.displayName,
        email: result.user.email,
      });
      console.log(User);
      setUserObj(User);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="rounded-lg border-white border-opacity-10 border-2 p-6 max-w-lg w-full backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] mx-3">
      <h2 className="text-2xl text-center mb-10 text-white font-bold">
        Login to your account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-4">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              },
            })}
            className={`peer w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-400"
            } rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
            placeholder="Enter your email"
          />
          <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
            Enter your Email{" "}
            {errors.email && <span className="text-red-500">*</span>}
          </label>
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className={`peer w-full p-3 border ${
              errors.password ? "border-red-500" : "border-gray-400"
            } rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
            placeholder="Enter your password"
          />
          <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
            Enter your Password{" "}
            {errors.password && <span className="text-red-500">*</span>}
          </label>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="mb-4 text-red-500 text-sm">
            <p>
              <span className="text-red-500">*</span> This is a required field
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-800 text-white p-3 rounded-xl hover:bg-blue-950 transform duration-300 shadow-xl font-semibold"
        >
          Login
        </button>
      </form>

      <div className="mt-4 flex justify-between text-sm mx-2">
        <p className="text-zinc-300 underline hover:text-blue-500">
          {" "}
          Forgot Password
        </p>
        <p className="text-zinc-300">
          Don't have an account?
          <span
            onClick={toggleForm}
            className="text-blue-400 cursor-pointer hover:text-red-600 underline transition-colors duration-300 ml-1"
          >
            Sign Up
          </span>
        </p>
      </div>

      <div className="my-4 flex items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-4 text-gray-400">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <button
        disabled={isLoading}
        onClick={signinWithGoogle}
        className="w-full bg-sky-950 border border-gray-500 text-gray-100 p-2 rounded-lg hover:bg-blue-900 transform duration-300 shadow-2xl font-semibold"
      >
        <span className="flex justify-center items-center gap-2">
          <img src="/google.svg" alt="Google Icon" />
          Continue with Google
        </span>
      </button>
      {isemailVerified && (
        <div className="mt-4 max-w-full max-h-30 bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-2/3 p-6">
            <div className="mt-6">
              <label
                htmlFor="otp"
                className="block text-gray-700 font-semibold mb-2"
              >
                Enter OTP:
              </label>
              <div className="flex space-x-2">
                {OTP.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-9 h-9 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => secondVerification(Userobj)}
                id="otpSubmitButton"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

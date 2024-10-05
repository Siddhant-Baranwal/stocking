import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { notification } from "antd";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const forgotPassword = (obj) => {
    sendPasswordResetEmail(auth, obj.email)
      .then(() => {
        notification.success({
          message: "Password reset email sent successfully!",
          // description: "Verified through QR succesfuly!",
        });
        // Show a success message to the user
      })
      .catch((error) => {
        console.error("Error sending password reset email: ", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-[url('/bg.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/65"></div>
      <div className="rounded-lg border-white border-opacity-10 border-2 py-6 px-5 max-w-xl w-full backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] mx-3">
        <h2 className="text-2xl text-center mb-5 text-white font-bold">
          Forgot Password
        </h2>
        <p className="text-slate-300 text-center">
          Enter your email and we will send you a link to reset your password
        </p>

        <form onSubmit={handleSubmit(forgotPassword)}>
          <div className="relative mb-5 mt-10">
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
              placeholder="Registered Email"
            />
            <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
              Registered Email{" "}
              {errors.email && <span className="text-red-500">*</span>}
            </label>
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="mb-6 text-red-500 text-sm">
              <p>
                <span className="text-red-500">*</span> This is a required field
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-3 rounded-xl hover:bg-blue-950 transform duration-300 shadow-xl font-semibold"
          >
            Get Link
          </button>
        </form>

        <div className="mt-6 text-center text-md">
          <p className="text-zinc-300 cursor-pointer hover:text-blue-500 underline underline-offset-2 transition-colors duration-300 ml-2">
            <Link to="/">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

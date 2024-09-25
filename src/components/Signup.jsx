import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  QRCode,
  Modal,
  Space,
  Input,
  Typography,
  Flex,
  notification,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Signup = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Code, setCode] = useState("");
  const [OTP, setOtp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const timeoutDuration = 60000; // 1 minute in milliseconds (60 seconds)

  // Function that returns a Promise and waits for the OTP to be entered
  const waitForOtp = () => {
    return new Promise((resolve, reject) => {
      // Start checking every 500ms if OTP is entered
      const checkOtp = setInterval(() => {
        // Convert OTP to a string and check if it has the required length
        if (OTP.length === 6) {
          clearInterval(checkOtp); // Stop checking once OTP is entered
          clearTimeout(timeout); // Clear the timeout if OTP is entered in time
          resolve(OTP); // Resolve the promise with the OTP value
        }
      }, 500);

      // Set a timeout for 1 minute, after which the promise is rejected
      const timeout = setTimeout(() => {
        clearInterval(checkOtp); // Stop checking if the time runs out
        reject(new Error("OTP input timed out after 1 minute")); // Reject with an error
      }, timeoutDuration);
    });
  };

  const GenerateQr = (code) => {
    setCode(code);
    setIsModalOpen(true);
  };

  const connectUrl = async (str, obj) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let payload = {
      email: obj.email,
      password: obj.password,
      name: obj.username,
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/auth/${str}`,
      payload,
      config
    );
    return data;
  };

  const QRcodeVerification = async (code) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // const { data } = await axios.post(
    //   `http://localhost:5000/api/auth/QRverification`,
    //   code,
    //   config
    // );
    return false;
  };

  const onSubmit = async (obj) => {
    setIsLoading(true);
    try {
      // fetching the user in authentication db
      const UserinAdb = await connectUrl("signup", obj);
      console.log(UserinAdb);

      // asking whether emial is verified
      const userConfirmed = window.confirm(
        "Have you verified though the link sended to your email?"
      );

      if (userConfirmed) {
        // chking is email is verified
        const isEmailVerified = await connectUrl("isEmailVerified", obj);
        if (isEmailVerified) {
          notification.success({
            message: "1st Verification done!",
            description: "Verified through email succesfuly!",
          });
          // to store user in db
          //   const User = await connectUrl("storeUser", obj);

          //2nd Verification
          const FetchedCode = "";
          GenerateQr(FetchedCode);
          const enteredOtp = await waitForOtp();
          const isQRverified = await QRcodeVerification(enteredOtp);
          if (isQRverified) {
            localStorage.setItem("userinfo", JSON.stringify(User));
            notification.success({
              message: "2nd Verification done!",
              description: "Verified through QR succesfuly!",
            });
            setIsLoading(false);
            navigate("/dashboard");
          } else {
            notification.error({
              message: "QR Verification not done!",
              description: "Please verify QR properly!",
            });
            setIsModalOpen(false);
            setOtp(null);
            setIsLoading(false);
          }
        } else {
          notification.error({
            message: "Verification not done!",
            description: "Please verify email properly!",
          });
          setIsLoading(false);
        }
      } else {
        // User clicked "Cancel"
        notification.error({
          message: "Verification not done!",
          description: "Please verify link sended in your email",
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

  return (
    <>
      <div className="rounded-lg border-white border-opacity-10 border-2 p-6 max-w-lg w-full backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        "
        <h2 className="text-2xl text-center mb-10 text-white font-bold">
          Create a new account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-4">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className={`peer w-full p-3 border ${
                errors.username ? "border-red-500" : "border-gray-400"
              } rounded-lg shadow-sm focus:border-blue-800 placeholder-transparent bg-transparent text-white mb-4 font-bold`}
              placeholder="Enter your username"
            />
            <label className="absolute left-3 -top-5 text-sm font-medium text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-white -z-10">
              Enter your Username{" "}
              {errors.username && <span className="text-red-500">*</span>}
            </label>
          </div>

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

          <div className="relative mb-2">
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
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <p className="text-zinc-300">
            Already have an account?
            <span
              onClick={toggleForm}
              className="text-blue-400 cursor-pointer hover:text-red-600 underline transition-colors duration-300 ml-2"
            >
              Login
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
          className="w-full bg-sky-950 border border-gray-500 text-gray-100 p-2 rounded-lg hover:bg-blue-900 transform duration-300 shadow-2xl font-semibold"
        >
          <span className="flex justify-center items-center gap-2">
            <img src="/google.svg" alt="Google Icon" />
            Continue with Google
          </span>
        </button>
      </div>
      <Modal
        title="Scan With Google authenticator"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <Space direction="horizontal" align="center">
          <QRCode value={Code || "-"} />
          <Flex align="flex-end" vertical>
            <Title level={4}>Enter OTP</Title>
            <Input.OTP value={OTP} onChange={() => setOtp(value)} />
          </Flex>
        </Space>
      </Modal>
    </>
  );
};

export default Signup;

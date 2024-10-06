import React, { useContext, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Landing = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate=useNavigate();
  if(currentUser){
    navigate("/dashboard");
  }
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-[url('/bg.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/65"></div>
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Landing;

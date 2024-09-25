import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-[url('/bg.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/65"></div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
}

export default Landing;

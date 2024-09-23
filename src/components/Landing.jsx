import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins" style={{ backgroundImage: 'radial-gradient(circle 800px at 50% 50%, #134074, #00072d)' }}>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
}

export default Landing;

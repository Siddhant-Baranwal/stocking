import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate=useNavigate(); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    console.log(user); 

    if (user){
      setCurrentUser(user.user); 
    }else{
      navigate("/");
    }

  }, []); 

  return (
    <AuthContext.Provider value={{ currentUser,setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

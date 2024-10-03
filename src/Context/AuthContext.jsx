import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));

    if (user) {
      setCurrentUser(user.user); 
      console.log(user); 
    }

  }, []); 

  return (
    <AuthContext.Provider value={{ currentUser,setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

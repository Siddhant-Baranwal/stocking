import React, { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/landing/Landing";
import ForgotPassword from "./components/landing/ForgotPassword";
import Resetpassword from "./components/landing/Resetpassword";
import CompanyData from "./components/company/CompanyData";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
 console.log(currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history/:companyId" element={<CompanyData />} />
      </Routes>
    </>
  );
}

export default App;

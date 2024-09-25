import React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"
import ForgotPassword from "./components/ForgotPassword"
import Profile from "./components/Profile"
import ChangePassword from "./components/ChangePassword"
import PageWiseHistory from "./components/PageWiseHistory"
import Resetpassword from "./components/Resetpassword"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/history/:company" element={<PageWiseHistory/>} />
      </Routes>
    </>
  )
}

export default App

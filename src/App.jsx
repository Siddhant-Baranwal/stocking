import React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App

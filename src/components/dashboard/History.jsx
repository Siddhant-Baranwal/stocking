import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitch from "../theme/ThemeSwitch";

const History = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();

  const deleteCookie = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };

  const changePassword = () => {
    navigate("/change-password");
  };

  const companyList = [
    "Nestle",
    "Mercedes",
    "Apple",
    "NVIDIA",
    "Google",
    "Reliance",
    "Nestle",
    "Mercedes",
    "Apple",
    "NVIDIA",
    "Google",
    "Reliance",
  ];

  const links = () => {
    if (companyList.length === 0) {
      return <div className="text-center py-4">No history...</div>;
    }
    return companyList.map((item, index) => (
      <Link
        key={item}
        className={`historyList block text-2xl font-thin py-1.5 px-6 border-neutral-500 border-2  ${
          index % 2 === 0
            ? "text-white bg-gradient-to-r from-[#04081687] to-[transparent] hover:bg-blue-950 "
            : "text-white bg-gradient-to-r from-[#4e63b187] to-[transparent] hover:bg-blue-950 "
        } hover:underline`}
        to={`/history/${item}`}
      >
        {item}
      </Link>
    ));
  };

  return (
    <div className="fixed right-0 top-0 h-screen bg-gradient-to-b from-[#0f1b4c] to-[#282f4772] text-white w-[25vw] flex flex-col p-3 box-border shadow-2xl drop-shadow-2xl">
      {/* Sidebar Content */}
      <div className="flex flex-col items-center font-lexend">
        <img src="/profile.svg" className="w-14 h-14" alt="Profile" />
        <h2 className="text-3xl font-bold">username</h2>
        <p className="text-xl mb-1">siddhant@example.com</p>

        <button
        onClick={changePassword}
        className="mt-1 text-white underline py-2 px-2 rounded-lg text-lg hover:text-blue-400"
      >
        Change Password
      </button>

        <div className="mb-2">
          <ThemeSwitch />
        </div>
      </div>

      

      {/* History Section */}
      <div className="flex-1 overflow-y-auto mt-4 border-t-2 border-white">
        <h3 className="text-2xl font-bold text-center mb-4">Search History</h3>
        <div className="font-proguerr">{links()}</div>
      </div>

      <button
        onClick={deleteCookie}
        className="mt-4 bg-gradient-to-tr from-[#ac2323] to-[#f8ebeb6d] hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg font-lexend"
      >
        Log out
      </button>
    </div>
  );
};

export default History;




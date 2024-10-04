import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitch from "../theme/ThemeSwitch";

const History = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const deleteCookie = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };

  const changePassword = () => {
    navigate("/change-password");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  const companyList = [
    "Nestle",
    "Mercedes",
    "Apple",
    "NVIDIA",
    "Google",
    "Reliance",
    "heroku",
    "Microsoft",
    "Ziome"
  ];

  const links = () => {
    if (companyList.length === 0) {
      return <div className="text-center py-4">No history...</div>;
    }
    return companyList.map((item, index) => (
      <Link
        key={item}
        className={`historyList block text-xl font-thin py-2 px-4 border-black border-[1px] ${
          index % 2 === 0
            ? "bg-gradient-to-r from-[#09112cc4] to-[transparent] hover:bg-blue-950"
            : "bg-gradient-to-r from-[#4e63b187] to-[transparent] hover:bg-blue-950"
        } hover:underline`}
        to={`/history/${item}`}
      >
        {item}
      </Link>
    ));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 block lg:hidden p-3 text-white bg-blue-950 rounded-md focus:outline-none text-lg"
      >
        {showSidebar ? "X" : "☰"}
      </button>

      <div
        className={`fixed top-0 right-0 h-screen bg-gradient-to-r from-[#010204] to-[#010204c6] text-white w-[60vw] sm:w-[35vw] lg:w-[25vw] p-4 shadow-2xl transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="flex flex-col items-center">
          <img src="/profile.svg" className="w-12 h-12 sm:w-14 sm:h-14" alt="Profile" />
          <h2 className="text-2xl sm:text-3xl font-bold">username</h2>
          <p className="text-lg sm:text-xl mb-1">saksham@example.com</p>

          <button
            onClick={changePassword}
            className="mt-1 text-white underline py-2 px-2 rounded-lg text-base sm:text-lg hover:text-blue-400"
          >
            Change Password
          </button>

          <div className="mb-2">
            <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mt-4 border-t-2 border-white">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">Search History</h3>
          <div className="font-proguerr">{links()}</div>
        </div>

        <button
          onClick={deleteCookie}
          className="mt-4 bg-gradient-to-tr from-[#ac2323] to-[#f8ebeb6d] hover:bg-red-600 text-white font-bold py-1.5 px-2 rounded-lg text-base lg:text-xl w-full sm:text-lg text-md"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default History;





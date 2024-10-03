import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const History = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate =useNavigate();
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const [showSide, setShowSide] = useState(window.innerWidth > 800);
  const handleShowSide = () => {
    setShowSide(!showSide);
  };
  const deleteCookie = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };
  const companyList = [
    "Nestle",
    "Mercedes",
    "Apple",
    "NVIDIA",
    "Google",
    "Reliance",
  ];
  const links = () => {
    if (companyList.length === 0) {
      return <div className="historyList">No history...</div>;
    }
    return companyList.map((item) => {
      return (
        <Link key={item} className="historyList" to={`/history/${item}`}>
          {item}
        </Link>
      );
    });
  };
  return (
    <div className="right">
      <div className="viewSidebar sidetab" onClick={handleShowSide}>
        {showSide ? "X" : "☰"}
      </div>
      {showSide && (
        <div>
          <div className="sidetab">
            <Link to="/change-password">Change password</Link>
          </div>
          <div className="sidetab">Toggle theme</div>
          <div className="sidetab" onClick={deleteCookie} >Log out</div>
          <div className="sidetab" onClick={handleShowLinks}>
            History here <span>{showLinks ? "▲" : "▼"}</span>{" "}
          </div>
          {showLinks && links()}
        </div>
      )}
    </div>
  );
};

export default History;

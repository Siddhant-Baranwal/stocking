import React, { useState } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const [showSide, setShowSide] = useState(window.innerWidth > 800);
  const handleShowSide = () => {
    setShowSide(!showSide);
  };
  const deleteCookie = () => {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
        document.cookie = 'token=; Max-Age=0; path=/;';
        console.log("Cookie deleted");
    } else {
        console.log("Cookie does not exist");
    }
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
            <Link to="/profile">My profile</Link>
          </div>
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

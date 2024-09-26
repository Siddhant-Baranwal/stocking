import React, { useState } from "react";
import LeftBarAbsent from "./LeftBarAbsent";
import LeftBarPresent from "./LeftBarPresent";
import History from "./History";

const Dashboard = () => {
  const [Company, setCompany] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const changeHandler = (e) => {
    setCompany(e.target.value);
    console.log(Company);
  };
  const searchHandler = (e) => {
    console.log(Company);
    if (Company === "") setIsCompany(false);
    else setIsCompany(true);
    e.preventDefault();
  };

  return (
    <div
      className="dash"
      style={{
        backgroundImage:
          "radial-gradient(circle 800px at 50% 50%, #134074, #00072d)",
      }}
    >
      <div className="head">
        <form action="POST" onSubmit={searchHandler} className="searchForm">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search company"
            value={Company}
            onChange={changeHandler}
          />
        </form>
      </div>
      <div className="main">
        {!isCompany && (
          <div>
            <LeftBarAbsent />
          </div>
        )}
        {isCompany && (
          <div>
            <LeftBarPresent />
          </div>
        )}
        <History />
      </div>
    </div>
  );
};

export default Dashboard;

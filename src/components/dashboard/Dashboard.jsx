import React, { useContext, useEffect, useState } from "react";
import LeftBarAbsent from "./LeftBarAbsent";
import LeftBarPresent from "./LeftBarPresent";
import History from "./History";
import axios from "axios";
import { notification } from "antd";
import { computation } from "./company";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [Company, setCompany] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [Results, setResults] = useState([]);
  const navigate=useNavigate();
  const changeHandler = (e) => {
    setCompany(e.target.value);
    console.log(Company);
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    console.log(Company);
    if (Company == "") {
      return "Please enter somthing to search";
    }
    
    try {
      const Result = await axios.get(
        `http://localhost:5000/api/company/filtered-search?name=${Company}`
      );
      console.log(Result);
      setResults(Result);
    } catch (error) {
      notification.error({
        message: "error fetching data",
      });
      console.log(error);
    }
  };
  
  //to call it  with sl_no  when user clicks on any of company 
  const settingHistory = async (no) => {
    try {
      //fetching results for computation
      const Companies = await axios.get(
        `http://localhost:5000/api/company/fetchall`
      );
      const Compwithcomputatn = computation({
        sl_no: no,
        data: Companies.data.companies,
      });

      const payload = {
        email: currentUser.email,
        newEntry: Compwithcomputatn,
      };
      const UpdatedUser = await axios.post(
        "http://localhost:5000/api/user/updateHistory",
        payload
      );
      console.log(UpdatedUser);
      setCurrentUser(UpdatedUser);
      navigate(`history/${Compwithcomputatn.id}`);
    } catch (error) {
      console.log(error);
    }
  }

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

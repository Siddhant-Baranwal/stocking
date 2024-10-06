import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const LeftBarAbsent = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <div className="left">
      <span className="hello">Hello, {currentUser?.name || "user"} !!</span>
      <div className="leftSub">
        <div className="card shadow-2xl">
          <div className="card-text">
            Get the detailed analysis of a company's stock using user-friendly
            graphs.
          </div>
          <img src="/images/analysis.png" alt="" />
        </div>
        <div className="card shadow-2xl">
          <div className="card-text">Compare the stock with other companies at the domestic and global level.</div>
          <img src="/images/compare.png" alt="" />
        </div>
        <div className="card shadow-2xl">
          <div className="card-text">
            Get suggestions about growth and performance of the company.
          </div>
          <img src="/images/suggestion.png" alt="" />
        </div>
        <div className="card shadow-2xl">
          <div className="card-text">Get future prediction about the stock price of the company.</div>
          <img src="/images/prediction.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftBarAbsent;

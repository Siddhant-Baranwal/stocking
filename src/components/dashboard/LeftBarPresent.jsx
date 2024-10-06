import React from "react";

const LeftBarPresent = ({ Companies, settingHistory }) => {
  console.log(Companies);
  return (
    <div className="flex flex-wrap gap-4 w-3/4 p-5">
      {Companies?.map((company) => (
        <div
          onClick={() => settingHistory(company.sl_no)}
          key={company.id}
          className="max-w-sm p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            {company.Name}
          </h2>
          <p className="text-gray-600">Country: {company.country}</p>
          <p className="text-gray-600">SL No: {company.sl_no}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftBarPresent;

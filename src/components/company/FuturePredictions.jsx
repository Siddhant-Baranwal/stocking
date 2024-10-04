import React from "react";

const FuturePredictions = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={`h-screen bg-gradient-to-tr ${isDarkMode ? "bg-gradient-to-tr from-[#000000] to-[#000000ee]" : "bg-white"} flex flex-col justify-center items-center`}>
      <div className={`comments w-4/5 flex items-center justify-center p-4 mb-8 font-lexend text-3xl ${isDarkMode ? "text-[rgb(216,210,250)]" : "text-[rgb(49,58,189)]"}`}>
        Comments on growth & stability
      </div>
      <div className={`suggestions-insights h-1/3 w-11/12 flex justify-center items-center ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#bfdae8] shadow-slate-300"} shadow-inner rounded-md`}>
        The growth of company is ....
      </div>
      <div className={`comments font-lexend ${isDarkMode ? "text-[rgb(216,210,250)]" : "text-[rgb(49,58,189)]"} w-full flex items-center justify-center p-4 mt-2 text-2xl`}>
        Predictions
      </div>
      <div className="data  w-full  mt-4 h-1/3 flex flex-col justify-center items-center gap-5 gap-x-5 pb-4">
        <div className="future-data w-full h-1/2 flex gap-4 px-6">
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
        </div>
        <div className="future-ranks w-full h-1/2 flex gap-4 px-6">
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
          <div className={`market shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"}  w-full rounded-lg`}>
            <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl px-1 h-4/5 flex items-center justify-center rounded-b-lg`}>
              $123.4B
            </div>
            <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-base `}>
              Market Capital
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePredictions;

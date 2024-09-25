import React from 'react'

const LeftBarAbsent = () => {
  const user = "Siddhant";
  return (
    <div className='left'>
      <p className="hello">Hello, {user}</p>
      <div className="leftSub">
        <div className="card">
          <div>Get the detailed analysis of a company's stock using user-friendly graphs.</div>
        </div>
        <div className="card">
          <div>Compare the stock with other companies in the same country.</div>
        </div>
        <div className="card">
          <div>Get suggestions about growth and performance of the company.</div>
        </div>
        <div className="card">
          <div>Get future prediction about the stock price of the company.</div>
        </div>
      </div>
    </div>
  )
}

export default LeftBarAbsent

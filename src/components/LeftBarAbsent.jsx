import React from 'react'

const LeftBarAbsent = () => {
  const user = "Siddhant";
  return (
    <div className='left'>
      <p className="hello">Hello, {user}</p>
      <div className="card">
        Get the detailed analysis of a company's stock using user-friendly graphs.
      </div>
      <div className="card">
        Compare the stock with other companies in the same country.
      </div>
      <div className="card">
        Get suggestions about growth and performance of the company.
      </div>
      <div className="card">
        Get future prediction about the stock price of the company.
      </div>
    </div>
  )
}

export default LeftBarAbsent

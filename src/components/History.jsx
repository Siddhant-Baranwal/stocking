import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const History = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const [showSide, setShowSide] = useState(false);
  const handleShowSide = () => {
    setShowSide(!showSide);
  };
  const companyList = ['Nestle', 'Mercedes', 'Apple', 'NVIDIA', 'Google', 'Reliance'];
  const links = () => {
    if(companyList.length===0){
      return <div className="historyList">No history...</div>
    }
    return companyList.map(item => {
      return <Link key={item} className='historyList' to={`/history/${item}`}>{item}</Link>
    })
  }
  return (
    <div className='right'>
      <div className="viewSidebar sidetab" onClick={handleShowSide}>{showSide ? '×' : '☰'}</div>
      {showSide && <div>
        <div className="sidetab"><Link to='/my'>My profile</Link></div>
        <div className="sidetab">Change password</div>
        <div className="sidetab" onClick={handleShowLinks}>History here <span>{showLinks ? '▲' : '▼'}</span> </div>
        {showLinks && links()}
      </div> }
    </div>
  )
}

export default History

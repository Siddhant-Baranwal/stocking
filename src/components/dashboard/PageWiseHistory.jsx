import React from 'react'
import { useParams } from 'react-router-dom'

const PageWiseHistory = () => {
  const { company } = useParams();
  return (
    <div>
      This is history of company: {company}
    </div>
  )
}

export default PageWiseHistory

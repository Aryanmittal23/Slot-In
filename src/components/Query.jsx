import React from 'react'
import img11 from '../assets/img11.png'
import './Query.css'
function Query() {
  return (
    <div className='query'>
      <img src={img11} alt="Sample" className="image" />
      <h1 className="head">Join the Slot-in community today and take control of
      <br />
       your grooming routine like never before</h1>

        <h2 className="head2">Any Query ?</h2>
        <div className='query-btn'>
        <input type="text" className="query-me" />
        </div>
       </div>
  )
}

export default Query

import React from 'react'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import './Card.css'
function Card() {
  return (
    <div>
    <div className='card1'>
        <div>
        <h2>Choose Your Own Time</h2>
        <p>Slot-in empowers you to select the
            <br />
             date and time that works best for 
             <br />
             you, ensuring that you never
             <br />
             have to wait in line again.
        </p>
        </div>
        <img src={img7} alt="" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div className='card2'>
        
        <img src={img8} alt="" />
        <div>
        <h2>Select Your Preferred Barber</h2>
        <p>
        Whether you have a favourite barber or
        <br /> prefer to try someone new, Slot-in
        <br /> allows you to browse through a curated
        <br /> list of experienced professionals and 
        <br />book appointments with ease.
        </p>
        
        </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <div className='card3'>
        <div>
        
        <h2>Receive Instant Confirmations</h2>
        <p>
        No more uncertainty about whether <br />
        your appointment is confirmed! With <br />
         Slot-in , you'll receive instant <br />
          notifications and confirmations,<br /> giving you peace of mind and 
          <br />eliminating last-minute surprises.
        </p>
        </div>
        <img src={img9} alt="" />
        </div>

        <br />
    <br />
    <br />
    <br />
    <div className='card4'>
        
        <img src={img10} alt="" />
        <div>
        <h2>Manage Your Appointments</h2>
        <p>
        Keep track of your upcoming <br />
         appointments and manage your schedule <br />
         effortlessly using the intuitive Slot-in <br />
          dashboard. Reschedule or cancel <br />
           appointments with just a few taps,<br />
            whenever you need to.

        </p>
        </div>
        </div>
        </div>
        
    
  )
}

export default Card

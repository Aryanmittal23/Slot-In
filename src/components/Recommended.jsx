import React from 'react';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import './Recommended.css'

function Recommended() {
  return (
    <div>
    <h2 className='recommended'>Recommended</h2>
        <div className="wrapper1">
            <div className="recommend">
                <img src={img1} alt=""/>
            
            </div>
            <div className="recommend">
                <img src={img2} alt="" />
            </div>
            <div className="recommend">
                <img src={img3} alt="" />
            </div>
            </div>
            <div className='wrapper2'>
            <div className="recommend">
                <img src={img4} alt="" />
            </div>
            <div className="recommend">
                <img src={img5} alt="" />
            </div>
            <div className="recommend">
                <img src={img6} alt="" />
            </div>
        </div>
        <h2 className='enjoy'>Enjoy a Hassle-Free Experience</h2>
        <p className='with'>With Slot-in, your barber appointments become stress-free and enjoyable</p>
        
        </div>
       
  )
}

export default Recommended

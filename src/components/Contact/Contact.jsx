import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or <br />
             find our contact information below.your feedback, <br />
              questions and suggestions are important to us</p>
              <ul>
                <li>mittalaryan932@gmail.com</li>
                <li>91+ 8109603445</li>
                <li>hcbhevjbjbjbvhvhj</li>
                </ul>
      </div>
      <div className="contact-col">
        <form >
            <label >Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your number' required/>
            <label >Write your message here</label>
            <textarea name="message"rows={6} placeholder='Enter your message here' required>
            </textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

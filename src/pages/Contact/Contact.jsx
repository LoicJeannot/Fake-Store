import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
        <div className='form-container'>
        <h1>Contact us</h1>
            <form>
                <input type='text' placeholder='First Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <textarea placeholder='Write your message here'></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
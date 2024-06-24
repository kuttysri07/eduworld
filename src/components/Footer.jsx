import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <p>{new Date().getFullYear()} All Rights Reserved</p>
        <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer
import React from 'react'
import "./program.css"

import model1 from "../Assets/model1.jpg"
import model2 from "../Assets/model2.jpg"
import model3 from "../Assets/model3.jpg"
import icon1 from "../Assets/icon1.svg"
import icon2 from "../Assets/icon2.svg"
import icon3 from "../Assets/icon3.svg"

const program = () => {
  return (
    <div className='container'>
       <div className="program">
        <img className='model' src={model1} alt="" />
        <div className='caption'>
        <img className='icon' src={icon1} alt="" />
        <p>Advance Learning</p>
        </div>
        </div>

        <div className="program">
        <img className='model' src={model2} alt="" />
        <div className='caption'>
        <img className='icon' src={icon2} alt="" />
        <p>Valid Certification</p>
        </div>
        </div>

        <div className="program">
        <img className='model' src={model3} alt="" />
        <div className='caption'>
        <img className='icon' src={icon3} alt="" />
        <p>Graduated</p>
        </div>
        </div>
       

    </div>
  )
}

export default program
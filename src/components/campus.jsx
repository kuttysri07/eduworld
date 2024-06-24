import React from 'react'
import "./campus.css"
import campus1 from "../Assets/campus1.jpg"
import campus2 from "../Assets/campus2.jpg"
import campus3 from "../Assets/campus3.jpg"
import campus4 from "../Assets/campus4.jpg"

const Campus = () => {
  return (
    <div className='campus'>
        <div className='campusImage'>
            <img src={campus1} alt="" />
            <img src={campus2} alt="" />
            <img src={campus3} alt="" />
            <img src={campus4} alt="" />
        </div>
        <button className='btn'>See more</button>
    </div>
  )
}

export default Campus
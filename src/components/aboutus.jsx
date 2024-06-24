import React from 'react'
import "./aboutus.css"
import aboutus from "../Assets/aboutus.webp"
import Play from "../Assets/playicon.webp"
const Aboutus = () => {
  return (
    <div className='aboutus'>
        <div className="left">
            <img className='pic' src={aboutus} alt="" />
            <img className='playbtn' src={Play} alt="" />
        </div>
        <div className="right">
            <h3>About University</h3>
            <h2>Inspiring Excellence Every Day</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores necessitatibus fugit architecto animi facilis aliquam corporis delectus,</p> 
             <p> porro quod perferendis aliquid quas assumenda iure illo, quisquam dignissimos, atque voluptas eius.</p>
             <p> Beatae quo placeat ab quis expedita aliquam inventore, commodi, repellendus harum sunt earum, itaque debitis odit et aut. </p>
          <p> Nesciunt ipsum quis recusandae cum voluptatum molestiae reprehenderit sit magni hic nam.</p>
        </div>
    </div>
  )
}

export default Aboutus
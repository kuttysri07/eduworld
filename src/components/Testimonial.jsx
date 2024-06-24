import React, { useRef } from 'react'
import "./Testimonial.css"

import rigthArrow from "../Assets/right.svg"
import leftArrow from "../Assets/left.svg"
import user1 from "../Assets/user1.jpg"
import user2 from "../Assets/user2.jpg"
import user3 from "../Assets/user3.jpg"
import user4 from "../Assets/user4.jpg"

const Testimonial = () => {

    const slider =useRef();
    var tx=0;


    function handleright(){
        if(tx > -50){
          tx=tx-25
        }
          slider.current.style.transform=`translateX(${tx}%)`;
          console.log("right clicked")
    }

    function handleleft(){
        if(tx < 0){
            tx=tx+25
          }
            slider.current.style.transform=`translateX(${tx}%)`
            console.log("left clicked")
    }

  return (
    <div className='testimonial'>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                    <div className='userInfo'>
                        <img src={user1} alt="" />
                        <div>
                        <h2>Caleb Underwood</h2>
                        <h3>Japan</h3>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia in 
                         nostrum iste earum dolor quod velit,
                         quos eaque inventore! Beatae earum deleniti quod corporis rerum harum 
                         libero, cupiditate perferendis asperiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugit voluptatum consequatur dolorum, qui odit laudantium nisi reiciendis, magni quae suscipit est, vero adipisci unde rem nostrum ipsam ratione eius!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                    <div className='userInfo'>
                        <img src={user2} alt="" />
                        <div>
                        <h2>Horace Gutierrez</h2>
                        <h3>France</h3>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia in 
                         nostrum iste earum dolor quod velit,
                         quos eaque inventore! Beatae earum deleniti quod corporis rerum harum 
                         libero, cupiditate perferendis asperiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugit voluptatum consequatur dolorum, qui odit laudantium nisi reiciendis, magni quae suscipit est, vero adipisci unde rem nostrum ipsam ratione eius!</p>
                     </div>
                </li>
                <li>
                    <div className='slide'>
                    <div className='userInfo'>
                        <img src={user3} alt="" />
                        <div>
                        <h2>Rex Berry
                       </h2>
                        <h3>India</h3>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia in 
                         nostrum iste earum dolor quod velit,
                         quos eaque inventore! Beatae earum deleniti quod corporis rerum harum 
                         libero, cupiditate perferendis asperiores.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                    <div className='userInfo'>
                        <img src={user4} alt="" />
                        <div>
                        <h2> Sherry Cooper</h2>
                        <h3>Philippines</h3>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia in 
                         nostrum iste earum dolor quod velit,
                         quos eaque inventore! Beatae earum deleniti quod corporis rerum harum 
                         libero, cupiditate perferendis asperiores.</p>
                    </div>
                </li>
            </ul>
        </div>
        <img className='leftArrow' src={leftArrow} alt=""   onClick={handleleft} />
        <img className="rightArrow" src={rigthArrow} alt=""  onClick={handleright} />
    </div>
  )
}

export default Testimonial
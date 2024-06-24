import React, { useEffect, useState } from 'react'
import { Link} from 'react-scroll';
import logo from "../Assets/logo.webp"
import menu from "../Assets/menu.svg"
import "./nav.css"

const Nav = () => {
  const [bgcolor,setBgcolor]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 50 ? setBgcolor(true) : setBgcolor(false)

    })
  },[])

  const [mobilemenu,setmobilemenu]=useState(false)

  function menutoggle(){
    mobilemenu? setmobilemenu(false):setmobilemenu(true);
    
  }

  return (
   <nav style={bgcolor ? {backgroundColor:"green"}:{backgroundColor:"transparent"}} >
    <img className='logo' src={logo} alt="" />
   
    <ul className={mobilemenu ? "":'hidemenu'}>
    
        <li><Link activeClass="active" to="hero" spy={true}  smooth={true} 
      offset={0} 
      duration={500} >
      Home 
    </Link> </li>
        <li>
        <Link 
      activeClass="active" 
      to="program" 
      spy={true} 
      smooth={true} 
      offset={-260} 
      duration={500} >
      Program
    </Link></li>
        <li>
        <Link 
      activeClass="active" 
      to="aboutus" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} >
      About us
    </Link></li>

        <li>
        <Link 
      activeClass="active" 
      to="campus" 
      spy={true} 
      smooth={true} 
      offset={-220} 
      duration={500} >
      Campus 
    </Link></li>

        <li>
        <Link 
      activeClass="active" 
      to="testimonial" 
      spy={true} 
      smooth={true} 
      offset={-200 } 
      duration={500} >
      Testimonials
    </Link></li>

        <li className='contact'>
        <Link 
      activeClass="active" 
      to="contactus" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >
      Contact us
    </Link></li>
    
    
    </ul>
    <img className='menuicon ' src={menu} alt="" onClick={menutoggle} />
   </nav> 
   
  )
}

export default Nav
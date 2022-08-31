import React, { useState } from "react"
import "./Header.css"
import Logo from "../../assets/logo.png"
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [toggleMenu, setToggleMenu]= useState(false)
  return (
    <header>
        <img src={Logo} alt="logo" className="logo" />
        {!toggleMenu && mobile ? (<AiOutlineMenu onClick={()=> setToggleMenu(true)} style={{width:'2rem', height:'2rem', background:'var(--appColor)', color:'white', borderRadius:'3px'}}/>) : 
        <ul className="header-links">
          <li onClick={()=> setToggleMenu(false)}><a href="#">Home</a></li>
          <li onClick={()=> setToggleMenu(false)}><a href="#programs">Programs</a></li>
          <li onClick={()=> setToggleMenu(false)}><a href="#plans">Plans</a></li>
          <li onClick={()=> setToggleMenu(false)}><a href="#testimonials">Testimonials</a></li>
        </ul>}
    </header>
  )
}

export default Header

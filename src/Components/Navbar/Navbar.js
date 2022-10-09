import React from 'react'
import { Link } from 'react-scroll';
// import pic from '../Navbar/pic.png';
import {GiNoodles} from 'react-icons/gi'
export default function Navbar () {
 
 
 
 
  return (
  

<>   
    <div className="container-fluid sticky-top" style={{backgroundColor:"#0F172B"}} >
  <nav className="navbar navbar-expand-lg navbar-dark col-lg-11 mx-auto py-3 " style={{backgroundColor:"#0F172B"}} >
  <div className="container-fluid" style={{backgroundColor:"#0F172B"}} >
  <Link className="navbar-brand" to="logo" style={{color:"#FEA116"}}>
      {/* <img src={pic} alt="" width="37" height="33" className="d-inline-block align-text-top"/> */}
      <GiNoodles size="1.5em" className="icon mx-1" />
         Noodliee
    </Link>
    {/* <Link className="navbar-brand" href="/">Navbar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"black"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0" >
     
        <li className="nav-item my_nav_items">
          <Link  to="hero" spy={true} smooth={true} offset={-100} duration={500} className="nav-link active " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="services" spy={true} smooth={true} offset={-250} duration={500} className="nav-link active" aria-current="page">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-link active" aria-current="page" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="menu" spy={true} smooth={true} offset={-120} duration={500} className="nav-link active" aria-current="page" >Menu</Link>
         </li>
        <li className="nav-item">
          <Link to="ourteam" spy={true} smooth={true} offset={-100} duration={500} className="nav-link active" aria-current="page" >Our Team</Link>
        </li>
        <li className="nav-item">
          <Link to="contactus" spy={true} smooth={true} offset={-100} duration={500} className="nav-link active" aria-current="page" >Contact Us</Link>
        </li>
        
        
       
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-warning" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
</div>
</>
  )
}

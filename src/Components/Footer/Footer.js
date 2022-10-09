import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {FaEnvelope} from 'react-icons/fa'
export default function Footer() {
  return (
  <div className="container-fluid" style={{backgroundColor:"#0F172B"}} id='contactus'>
       <div className="col-9 mx-auto ">
        <div className="row border-bottom">
        <div className="col-md-4 mt-3">
        <h3 className='font_style'>Company</h3>
        <ul className='mt-1'style={{color:"white"}}>
            <li>
                <a href="/" style={{color:"white"}}>About Us</a>
            </li>
            <li>
                <a href="/" style={{color:"white"}}>Contact Us</a>
            </li>
            <li>
                <a href="/" style={{color:"white"}}>Privacy Policy</a>
            </li>
            <li>
                <a href="/" style={{color:"white"}}>Terms & Conditions</a>
            </li>
        </ul>
        </div>
        <div className="col-md-4 mt-3" style={{color:"white"}}>
            <h3 className='font_style'>Contact</h3>
            <p  ><ImLocation2/> 123 Street, New York, USA</p>
            <p><BsTelephoneFill/> +012 345 67890</p>
            <p><FaEnvelope/> noodliee@gmail.com</p>
        </div>
        <div className="col-md-4 mt-3"  style={{color:"white"}}>
        <h3 className='font_style'>Opening</h3>
        <h6 >Monday - Saturday</h6>
        <p>09AM - 09PM</p>
        <h6>Sunday</h6>
        <p>10AM - 08PM</p>
        </div>
       </div>
       <p className='py-4' style={{color:"white"}}>© Noodliee, All Right Reserved. Designed By <span className='my_name'>Qazi Zohaib Ali</span> </p>
       </div>

       </div>
  )
}

import React from 'react'
import "../Menu/Menu.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {FaHamburger,FaCoffee,FaUtensils} from 'react-icons/fa'
import { useState } from 'react'
import Breakfast from './SubComponents/Breakfast'
import Dinner from './SubComponents/Dinner'
import Lunch from './SubComponents/Lunch'

export default function Menu() {
  

const[mystyle1,setMystyle1]=useState("small_card1")
const[mystyle2,setMystyle2]=useState("small_card1")
const[mystyle3,setMystyle3]=useState("small_card1")

  const border1 = ()=>{
   
    console.log("clicked1")
    setMystyle1("small_card2")
    setMystyle3("small_card1")
    setMystyle2("small_card1")

  }
  const border2 = ()=>{
   
    console.log("clicked2")
    setMystyle2("small_card2")
    setMystyle1("small_card1")
    setMystyle3("small_card1")

  }
  const border3 = ()=>{
   
    console.log("clicked3")
    setMystyle3("small_card2")
    setMystyle1("small_card1")
    setMystyle2("small_card1")

  }

  return (
   <>
   <div className="container col-12 text-center my-4" id='menu'>
   
    <h4 className='my-4 font_style'>Food Menu</h4>
    <h1 className='font_style2'>MOST POPULAR ITEMS</h1></div>
   <Router basename='/NOODLIEE'>
   <div className="my_content d-flex justify-content-center my-3">
    <Link to="breakfast" onClick={border1} className={`d-flex justify-content-center align-items-center px-1 py-0 small_card ${mystyle1}`}>
      <div><FaCoffee style={{color:"#FEA116"}} size="2.5rem"/></div>
      <div className='mx-1 font_style3'>
      <p className='mb-0 para'>Popular</p>
      <h6 className='h6' >BREAKFAST</h6>
      </div>
    </Link>
    <Link to="lunch" onClick={border2} className={`d-flex justify-content-center align-items-center px-1 py-0 small_card ${mystyle2}`}>
      <div><FaHamburger style={{color:"#FEA116"}} size="2.2rem"/></div>
      <div className='mx-1 font_style3' >
      <p className='mb-0 para'>Special</p>
      <h6 className='h6' >LUNCH</h6>
      </div>
    </Link>
    <Link to="dinner" onClick={border3} className={`d-flex justify-content-center align-items-center px-1 py-0 small_card ${mystyle3}`} >
      <div><FaUtensils style={{color:"#FEA116"}} size="2.2rem"/></div>
      <div className='font_style3'>
      <p className='mb-0 para'>Lovely</p>
      <h6 className='h6' >DINNER</h6>
      </div>
    </Link>
    </div>
   
    <Routes>
          <Route path="/NOODLIEE" element={<Breakfast/>}></Route>
          <Route path="/lunch" element={<Lunch/>}></Route>
          <Route path="/dinner" element={<Dinner/>}></Route>
          
        
        </Routes>

        </Router>
  
   
   </>
  )
}

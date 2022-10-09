import React from 'react'
import lunch1 from './Pics/lunch1.jpg'
import lunch2 from './Pics/lunch2.jpg'
import lunch3 from './Pics/lunch3.jpg'
import lunch4 from './Pics/lunch4.jpg'
import lunch5 from './Pics/lunch5.jpg'
import lunch6 from './Pics/lunch6.jpg'

export default function Lunch() {
  return (
    <div className="col-10 mt-4 mx-auto my-4" id='lunch'>
    <div className="row">
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch1} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch2} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch3} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch4} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch5} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
      <img src={lunch6} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
      <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
      <h5 className='mx-2'>Fiery Prawn Cocktail</h5>
      <h4 className='mx-2'>123$</h4>
      </div>
     </div>
     
     
   
   </div>
   </div>
  )
}

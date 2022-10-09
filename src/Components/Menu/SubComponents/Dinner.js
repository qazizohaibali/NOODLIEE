import React from 'react'
import din1 from '../SubComponents/Pics/din1.jpg'
import din2 from '../SubComponents/Pics/din2.jpg'
import din3 from '../SubComponents/Pics/din3.jpg'
import din4 from '../SubComponents/Pics/din4.jpg'
import din5 from '../SubComponents/Pics/din5.jpg'
import din6 from '../SubComponents/Pics/din6.jpg'

export default function Dinner() {
  return (
    
    <div className="col-10 mt-4 mx-auto my-4" id='dinner'>
     <div className="row">
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din1} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din2} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din3} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din4} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din5} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      <div className=" col-sm-10 col-lg-6 px-lg-2 d-flex flex-columns py-3">
       <img src={din6} alt="" className='flex-shrink-0 rounded'style={{width:"80px"}} />
       <div className="menu_list container px-0 my-0 d-flex justify-content-between align-items-center border-bottom border-top ">
       <h5 className='mx-2'>Sesame shrimp</h5>
       <h4 className='mx-2'>123$</h4>
       </div>
      </div>
      
      
    
    </div>
    </div>
   
  )
}

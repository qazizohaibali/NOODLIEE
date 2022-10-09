import React from 'react'
// import { Link } from 'react-router-dom'
import homebg from '../Home/homebg.png'


export default function Home() {
  return (
    <>
    <section className="d-flex align-items-center " id='hero'>
     <div className="container-fluid ">
      {/* <div className="row"> */}
        <div className="col-10 mx-auto mt-lg-4">
          <div className="row">
            <div className="col-md-6 pt-1 pt-lg-0  d-flex justify-content-center flex-column">
              <h1 className='mt-2 font_style2'>
              <strong>DELICIUS <br /> NOODLES DISH</strong>
              </h1>
              <h2 className='my-3 font_style3' >
              We make Noodles for you come and taste our delicious dishes 
              </h2>
              <h5 className='font_style3'>
                30% off till 30th SEP
              </h5>
              <div className=" mt-4 mt-lg-5">
                <a href="/btn" className='order_btn' >
                 ORDER NOW
                </a>
              </div>
            </div>
           <div className="col-md-6 mt-2 mt-lg-4 pt-4  order-2 order-lg-1 ">
           <img src={homebg} className="img-fluid"alt="home img"   />
           </div>
          </div>

        </div>
      </div>
     {/* </div> */}
     </section>   
    </>
  )
}

 



/* <div className="main">

  <div className="content col-6">
    <h2 className='heading'>DELICIUS NOODLES DISH</h2>
    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, non. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, perferendis.</p>
    
  </div>
  
 
  <img src={homebg} className="col-6 order-2 order-lg-1"alt="" height="100%" width="100%"  />
  </div> */
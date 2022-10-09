import React from 'react'
import { FaUtensils,FaHeadset,FaCartPlus,FaUserTie } from 'react-icons/fa';
// import {  } from 'react-icons/fa';
// import { } from 'react-icons/fa';
// import {  } from 'react-icons/fa';

export default function Cards() {
  return (<>

    <div className="container-fluid font_style3" id='services'>
            <div className="col-10 mt-5 mx-auto">
        <div className="row">

            
  <div class="col-sm-6 col-lg-3 mb-3">
    <div class="card our_cards shadow p-3 mb-5  rounded ">
      <div class="card-body">
      <FaUserTie size={'3em'}/><h4 class="card-title mt-2">Master Chefs</h4><p class="card-text font_style3">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
            
  <div class="col-sm-6 col-lg-3 mb-3">
    <div class="card our_cards shadow p-3 mb-5  rounded">
      <div class="card-body">
      <FaUtensils  size={'3em'}/><h4 class="card-title mt-2">Quality Food</h4><p class="card-text font_style3">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
            
  <div class="col-sm-6 col-lg-3 mb-3">
    <div class="card our_cards shadow p-3 mb-5  rounded">
      <div class="card-body">
      <FaCartPlus  size={'3em'}/><h4 class="card-title mt-2">Online Order</h4><p class="card-text font_style3">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3 mb-3">
    <div class="card our_cards shadow p-3 mb-5  rounded">
      <div class="card-body">
        
      <FaHeadset  size={'3em'}/><h4 class="card-title mt-2">24/7 Service</h4><p class="card-text font_style3">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
  </div>
</div> 
      
  
            </div>
  
</div>
    </div>
</>
  )
}

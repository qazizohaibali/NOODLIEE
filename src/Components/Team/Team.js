import React from "react";
import chef1 from "../Team/chef1.jpg";
import chef2 from "../Team/chef2.jpg";
import chef3 from "../Team/chef3.jpg";
import chef4 from "../Team/chef4.jpg";

export default function Team() {
  return (
    <>
      <div className="container text-center mt-5 font_style3" id="ourteam">
        <h4 className="my-3 ">Team Members</h4>
        <h1 className="my-4 ">Our Master Chefs</h1>

        <div className="col-11  mt-5 mx-auto">
          <div className="row">
             
             <div class="col-sm-6 col-lg-3 mb-3">
              <div class="card  shadow p-3 mb-5  rounded ">
                <img src={chef1} class="card-img-top rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Thomas Keller</h5>
                  <p class="card-text">
                Executive Chef               
                  </p>
                </div>
              </div>
             </div>
             <div class="col-sm-6 col-lg-3 mb-3">
              <div class="card shadow p-3 mb-5  rounded ">
                <img src={chef2} class="card-img-top rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Wolfgang Puck</h5>
                  <p class="card-text">
                  Head Chef  
                  </p>
                </div>
              </div>
             </div>
             <div class="col-sm-6 col-lg-3 mb-3">
              <div class="card  shadow p-3 mb-5  rounded ">
                <img src={chef3} class="card-img-top rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Grant Achatz</h5>
                  <p class="card-text">
                  Deputy Chef 
                  </p>
                </div>
              </div>
             </div>
             <div class="col-sm-6 col-lg-3 mb-3">
              <div class="card shadow p-3 mb-5  rounded ">
                <img src={chef4} class="card-img-top rounded-circle" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">James Beard</h5>
                  <p class="card-text">
                  Station Chef
                  </p>
                </div>
              </div>
             </div>

       
          </div>
        </div>
      </div>
    </>
  );
}

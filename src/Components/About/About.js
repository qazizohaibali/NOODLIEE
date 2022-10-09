import React from "react";
import abt1 from "../About/abt1.jpg";
import abt2 from "../About/abt2.jpg";
import abt3 from "../About/abt3.jpg";
import abt4 from "../About/abt4.jpg";
import { GiNoodles } from "react-icons/gi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function About() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className=" col-10 mx-auto py-3" id="about" >
      <div className="container">
        <div className="row g-5 align-itmes center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img src={abt3} className="img rounded w-100" alt="" />
              </div>
              <div className="col-6 text-start" style={{ marginTop: "15%" }}>
                <img src={abt4} className="img rounded w-75" alt="" />
              </div>
              <div className="col-6 text-end">
                <img src={abt1} className="img rounded w-75" alt="" />
              </div>
              <div className="col-6 text-end">
                <img src={abt2} className="img rounded w-100" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div class="row">
              <div class="col-lg-12 mt-lg-5 p-0">
             
                    <h3 className='font_style'>About Us</h3>
                    <h1 className="mt-lg-3 font_style2">
                      Welcome To <GiNoodles size="2em" className="icon" />{" "}
                      Noodlie{" "}
                    </h1>
                    <p className="mt-lg-4 font_style3" >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea quis dolores inventore nemo odit quae tempora quasi
                      maxime ab. Ullam?
                    </p>
                    <p className="font_style3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea quis dolores inventore nemo odit quae tempora quasi
                      maxime ab. Ullam?
                    </p>
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <div className="row g-1 px-2 mt-lg-2">
                        <div className="col-sm-6 col-sm-6 mb-0">
                          <div className="row my_border mb-0 ">
                            <div className="col-3">

                            <h1 className="exp-heading mb-0">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={15}
                                  duration={2}
                                  delay={0}
                                  ></CountUp>
                                  )}
                            </h1>
                                  </div>

                                  <div className="col-9 d-flex align-items-center">
                           <div className="row ps-3 pl-0">
                            <p className="exp-para mb-0 font_style3">Years Of</p>

                            <h3 className="exp-para mt-0 mb-0 font_style3">Experience</h3>
                           </div>
                           
                                  </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-sm-6 mb-0">
                          <div className="row my_border mb-0">
                            <div className="col-3">
                            <h1 className="chefs-heading mb-0">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={50}
                                  duration={3}
                                  delay={0}
                                />
                              )}
                            </h1>
                            </div>
                            <div className="col-9 d-flex align-items-center">
                            <div className="row ps-3 pl-0">
                            <p className="exp-para mb-0 font_style3">Popular</p>
                            <h3 className="mb-0 font_style3" >Master Chefs</h3>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row my-5">
                      <div className="col-4">
                      <button className="abt_btn">Read More</button>

                      </div>

                      </div>
                    </ScrollTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
  );
}

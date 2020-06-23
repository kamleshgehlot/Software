import React, { Component} from 'react';


export default class OurExpertise extends Component {
    render()
  
    {
     
        return(
            <div>
      <div className="wantToWork-area w-padding" id="Our Expertise">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                
                <h2>Our Expertise</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-5 col-md-4">
              <div className="wantToWork-btn f-right">
                {/* <a href="#" className="btn btn-ans">view more</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Want To Work End */}
      {/* Our Services Start */}
      <div className="our-services  pt-50 pb-150">
        <div className="container">
          <div className="row">
        
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                <span className="devicon-dot-net-plain colored" />
                </div>
                
                <div className="services-cap">
                  <h5>Microsoft.Net</h5>
                  <p>.NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft.</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-java-plain colored" />
                </div>
                <div className="services-cap">
                  <h5>Java</h5>
                  <p>Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation.  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                <img style={{width: '40%'}} src="/img/salesforce.png" alt="" />
                </div>
                <div className="services-cap">
                  <h5>Salesforce</h5>
                  <p>Salesforce is the primary enterprise offering within the Salesforce platform.</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-php-plain colored" />
                </div>
                <div className="services-cap">
                  <h5>PHP</h5>
                  <p>PHP is a general-purpose programming language originally designed for web development. </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                <img style={{width: '30%'}} src="/img/biz.png" alt="" />
                </div>
                <div className="services-cap">
                  <h5>Biztalk</h5>
                  <p>Microsoft BizTalk Server (or simply "BizTalk") is an Inter-Organizational Middleware System (IOMS).  </p>
                </div>
              </div>
            </div>
            
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-apple-original coloreds" />
                </div>
                <div className="services-cap">
                  <h5>ios </h5>
                  <p>Apple iOS was originally called the iPhone OS but was renamed 2010 to reflect the operating system's evolving support.  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-android-plain" />
                </div>
                <div className="services-cap">
                  <h5>Android </h5>
                  <p>Android is a mobile operating system based on a modified version of the Linux kernel and other open source software.  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-python-plain colored" />
                </div>
                <div className="services-cap">
                  <h5>Python </h5>
                  <p>Python is an interpreted, high-level, general-purpose programming language.  </p>
                </div>
              </div>
            </div>
             <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="devicon-nodejs-plain colored" />
                </div>
                <div className="services-cap">
                  <h5>Nodejs</h5>
                  <p>Node.js is an open-source, cross-platform, JavaScript runtime environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


	
          </div>
          



        )
    }
}
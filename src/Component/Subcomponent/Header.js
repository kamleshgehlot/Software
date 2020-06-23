import React, { Component} from 'react';


export default class Header extends Component {
    render()
  
    {
     
        return(
            <div>

<header>
      {/* Header Start */}
      <div className="header-area header_area header-transparent">
        <div className="main-header">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-1 col-md-1">
                  <div className="logo">
                    <a href="index.html"><img src="/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  {/* Main-menu */}
                  <div className="main-menu f-right d-none d-lg-block">
                  
                      <ul id="navigation">                                                                                                                                     
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Whyus">Why us</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Our Works">Our Works</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Our Expertise">Our Expertise</a></li>
                        <li><a href="#Portfolios">Works</a></li>
                        <li><a href="#Contact">Contact</a></li>

                      </ul>
                  
                  </div>
                </div>             
                {/* <div className="col-xl-2 col-lg-3 col-md-3">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <a href="#" className="btn header-btn">Contact Now</a>
                  </div>
                </div> */}
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
    
    <div className="slider-area  slider-height" style={{backgroundImage: 'url(/img/hero/h1_hero.jpg)'}}>
        <div className="slider-active">
          {/* Single Slider */}
          <div className="single-slider">
            <div className="slider-cap-wrapper">
              <div className="hero__img">
                <img src="/img/hero/hero_img.jpg" alt="" data-animation="fadeInRight" data-transition-duration="5s" />
              </div>
              <div className="hero__caption">
                <h1 data-animation="fadeInLeft" data-delay=".4s">Business Synergy via <br />Robust Strategies</h1>
                <p data-animation="fadeInLeft" data-delay=".6s">Aasrem dfgum dolor sivst amet, consectetur adipisicing elitvde, sed dvo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad micnim veniam, quis nostrud exercita.</p>
                {/* Hero Btn */}
               
              </div>
            </div>
          </div>
          {/* Single Slider */}
          <div className="single-slider">
            <div className="slider-cap-wrapper">
              <div className="hero__img">
                {/* <img src="/img/hero/hero_img2.jpg" alt="" data-animation="fadeInRight" data-transition-duration="5s" /> */}
              </div>
              <div className="hero__caption">
                {/* <h1 data-animation="fadeInLeft" data-delay=".4s">Business Synergy via <br />Robust Strategies</h1> */}
                {/* <p data-animation="fadeInLeft" data-delay=".6s">Aasrem dfgum dolor sivst amet, consectetur adipisicing elitvde, sed dvo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad micnim veniam, quis nostrud exercita.</p> */}
                {/* Hero Btn */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

   
</div>
      
      )
    } 
    }  
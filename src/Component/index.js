import React, { Component} from 'react';


export default class Home extends Component {
    render()
  
    {
     
        return(
            <div>
    {/* Preloader Start */}
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle" />
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/loder.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    {/* Preloader Start */}
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
                    <nav> 
                      <ul id="navigation">                                                                                                                                     
                        <li><a href="#Home">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="work.html">Works</a></li>
                        {/* <li><a href="blog.html">Blog</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="single-blog.html">Blog Details</a></li>
                          </ul>
                        </li> */}
                        {/* <li><a href="#">Pages</a>
                          <ul className="submenu">
                            <li><a href="elements.html">Element</a></li>
                          </ul>
                        </li> */}
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>             
                <div className="col-xl-2 col-lg-3 col-md-3">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <a href="#" className="btn header-btn">Contact Now</a>
                  </div>
                </div>
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
    <main>
      {/* slider Area Start*/}
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
      {/* slider Area End*/}
      {/* Want To Work Start */}
      <div className="wantToWork-area w-padding">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                
                <h2>Why Us</h2>
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
                  <span className="flaticon-experience" />
                </div>
              
                <div className="services-cap">
                  <h5>Efficient Developers</h5>
                  <p>Our expert developers build highly efficient web solutions using a robust web development framework that meets all Client Business .</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-pay" />
                </div>
                <div className="services-cap">
                  <h5>Management & Comm..</h5>
                  <p>Whether it is long term collaboration or just a small project,communication and our project management </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-good" />
                </div>
                <div className="services-cap">
                  <h5>Trusted Web Solution</h5>
                  <p>Our pragmatic approach and proven methodology in developing customized web pages have offered trusted web solutions </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services End */}
      {/* Visit Our Tailor Start */}
      <div className="visit-tailor-area fix">
        {/*Right Contents  */}
        <div className="tailor-offers" />
        {/* left Contents */}
        <div className="tailor-details">
          {/* <span>All of our Skills In The Fild</span> */}
          <h3>About Us</h3>
          <p>We have been contrived with the main motto of enhancing the quality of living and businesses.<br/>We consistently endeavor to develop software which are tailored finely as per the needs of our client community.</p>
          {/* skill Start */}
          <div className="skill-ara">
            <div className="skill">
              <div className="single-skill">
                <div className="progress-count">
                  <p>Customer-Oriented Approach </p><span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s" aria-valuenow={25} role="progressbar" style={{width: '75%'}} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="single-skill">
                <div className="progress-count">
                  <p>Quality is our top Priority</p><span>89%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".7s" role="progressbar" style={{width: '89%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="single-skill">
                <div className="progress-count">
                  <p>Clear and Transparent Process </p><span>70%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".7s" role="progressbar" style={{width: '89%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="single-skill">
                <div className="progress-count">
                  <p>On-Time Delivery</p><span>95%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".6s" role="progressbar" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
          {/* skill End */}
        </div>
      </div>
      {/* Visit Our Tailor End */}
      {/* Want To Work Start */}
      <div className="wantToWork-area w-padding3">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                {/* <p>Works That We Done Recently</p> */}
                <h2>Our Works</h2>
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
      {/* Project Gallery Start */}
      <div className="project-gallery-area">
        <div className="container-full p-0">
          <div className="row no-gutters">
            {/* Big img */}
            <div className="col-lg-5 col-md-4">
              <div className="portfolio-wrapper">
                <div className="portfolio-thumb big-img" style={{backgroundImage: 'url(/img/gallery/project_list1.png)'}}>
                </div>
                {/* Popup img Link */}
                <div className="portfolio-content">
                  <a href="/img/gallery/project_list1.png" className="img-pop-up">View Project</a>
                </div>
              </div>
            </div>
            {/* Small Img */}
            <div className="col-lg-7 col-md-8">
              <div className="row no-gutters">
                <div className="col-lg-5 col-md-6 col-sm-6">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-thumb small-img" style={{backgroundImage: 'url(/img/gallery/project_list2.png)'}}>
                    </div>
                    {/* Popup img Link */}
                    <div className="portfolio-content">
                      <a href="/img/gallery/project_list2.png" className="img-pop-up">View Project</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-6">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-thumb small-img" style={{backgroundImage: 'url(/img/gallery/project_list3.png)'}}>
                    </div>
                    {/* Popup img Link */}
                    <div className="portfolio-content">
                      <a href="/img/gallery/project_list3.png" className="img-pop-up">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-7 col-md-6 col-sm-6">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-thumb small-img" style={{backgroundImage: 'url(/img/gallery/project_list4.png)'}} />
                    {/* Popup img Link */}
                    <div className="portfolio-content">
                      <a href="/img/gallery/project_list4.png" className="img-pop-up">View Project</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-6">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-thumb small-img" style={{backgroundImage: 'url(/img/gallery/project_list5.png)'}} />
                    {/* Popup img Link */}
                    <div className="portfolio-content">
                      <a href="/img/gallery/project_list5.png" className="img-pop-up">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Gallery End */}
      {/* Testimonial Start */}
    
      <div className="wantToWork-area w-padding">
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




      {/* Testimonial End */}
      {/*All startups Start */}
      <div className="all-starups-area fix">
        {/* left Contents */}
        <div className="starups">
          <div className="starups-details">
            {/* <span>Features That You Will Get</span> */}
            <h3>Our Goals</h3>
            {/* Details */}
            <div className="starups-list">
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px">
                    <path fillRule="evenodd" fill="rgb(4, 219, 236)" d="M15.000,0.000 C23.284,0.000 30.000,6.716 30.000,15.000 C30.000,23.284 23.284,30.000 15.000,30.000 C6.716,30.000 -0.000,23.284 -0.000,15.000 C-0.000,6.716 6.716,0.000 15.000,0.000 Z" />
                    <text kerning="auto" fontFamily="themify" fill="rgb(255, 255, 255)" fontSize="14px" x="9px" y="22.0320000000002px"></text>
                  </svg>
                </li>
                <li>
                  <p>To Excel our Technical Expertise</p>
                </li>
              </ul>
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px">
                    <path fillRule="evenodd" fill="rgb(4, 219, 236)" d="M15.000,0.000 C23.284,0.000 30.000,6.716 30.000,15.000 C30.000,23.284 23.284,30.000 15.000,30.000 C6.716,30.000 -0.000,23.284 -0.000,15.000 C-0.000,6.716 6.716,0.000 15.000,0.000 Z" />
                    <text kerning="auto" fontFamily="themify" fill="rgb(255, 255, 255)" fontSize="14px" x="9px" y="22.0320000000002px"></text>
                  </svg>
                </li>
                <li>
                  <p>To Take Up Challenges</p>
                </li>
              </ul>
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px">
                    <path fillRule="evenodd" fill="rgb(4, 219, 236)" d="M15.000,0.000 C23.284,0.000 30.000,6.716 30.000,15.000 C30.000,23.284 23.284,30.000 15.000,30.000 C6.716,30.000 -0.000,23.284 -0.000,15.000 C-0.000,6.716 6.716,0.000 15.000,0.000 Z" />
                    <text kerning="auto" fontFamily="themify" fill="rgb(255, 255, 255)" fontSize="14px" x="9px" y="22.0320000000002px"></text>
                  </svg>
                </li>
                <li>
                  <p>To Stand Out of Croud</p>
                </li>
              </ul>
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px">
                    <path fillRule="evenodd" fill="rgb(4, 219, 236)" d="M15.000,0.000 C23.284,0.000 30.000,6.716 30.000,15.000 C30.000,23.284 23.284,30.000 15.000,30.000 C6.716,30.000 -0.000,23.284 -0.000,15.000 C-0.000,6.716 6.716,0.000 15.000,0.000 Z" />
                    <text kerning="auto" fontFamily="themify" fill="rgb(255, 255, 255)" fontSize="14px" x="9px" y="22.0320000000002px"></text>
                  </svg>
                </li>
                <li>
                  <p>To Stay Client-Focused</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Right Contents  */}
        <div className="starups-img" />
      </div>
      {/*All startups End */}
      {/* Want To Work Start */}
      <div className="wantToWork-area w-padding3">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                {/* <p>Once you’ve settled on a business</p> */}
                <h2>Portfolios.</h2>
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
      {/* David Droga start */}
      <div className="david-droga-area  pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* single-david */}
              <div className="single-david mb-30">
                <div className="david-img">
                  <img src="/img/MillennialCare.png" alt="" />
                </div>
                <div className="david-captoin">
                  <ul className="david-info">
                    {/* <li>january 28, 2020 </li>
                    <li> No Comments</li> */}
                  </ul>
                  <h4><a href="#">At Millennial Care, we provide quality, sustainable and flexible
                      services that uphold human rights
                      and create opportunities.</a></h4>
                  <span>Continue Reading</span>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* single-david */}
              <div className="single-david mb-30">
                <div className="david-img">
                  <img src="/img/HybridSkill.png" alt="" />
                </div>
                <div className="david-captoin">
                  <ul className="david-info">
                    {/* <li>january 28, 2020 </li>
                    <li> No Comments</li> */}
                  </ul>
                  <h4><a href="single-blog.html">We are on a mission to deliver cutting-edge consulting
                      and training solutions to the Information Technology.</a></h4>
                  <span>Continue Reading</span>
                </div>
              </div>
            </div>
<br></br>
<br></br>
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* single-david */}
              <div className="single-david mb-30">
                <div className="david-img">
                  <img src="/img/Nubeselite.png" alt="" />
                </div>
                <div className="david-captoin">
                  <ul className="david-info">
                    {/* <li>january 28, 2020 </li>
                    <li> No Comments</li> */}
                  </ul>
                  <h4><a href="single-blog.html">NubesElite is one of the best sales force consulting and training
                      solution in Bangalore, offering various software courses.</a></h4>
                  <span>Continue Reading</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* single-david */}
              <div className="single-david mb-30">
                <div className="david-img">
                  <img src="/img/SAINew.png" alt="" />
                </div>
                <div className="david-captoin">
                  <ul className="david-info">
                    {/* <li>january 28, 2020</li>
                    <li>No Comments</li> */}
                  </ul>
                  <h4><a href="#">The global Market Research Industry over a period has
                      evolved from being value proposition driven to become client oriented and output driven.</a></h4>
                  <span>Continue Reading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* David Droga End */}
      {/* Want To Work Start */}
      <div>
        <div className="container">
        <section className="contact-section">
  <div className="container">
    <div className="d-none d-sm-block mb-5 pb-4">
      <div id="map" style={{height: '480px', position: 'relative', overflow: 'hidden'}}><div style={{height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)'}}><div className="gm-style" style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px'}}><div tabIndex={0} style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y'}}><div style={{zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 100, width: '100%'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}><div style={{position: 'absolute', zIndex: 991, transform: 'matrix(1, 0, 0, 1, -100, -189)'}}><div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div></div></div></div><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 101, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 102, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 103, width: '100%'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: -1}}><div style={{position: 'absolute', zIndex: 991, transform: 'matrix(1, 0, 0, 1, -100, -189)'}}><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '0px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '0px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '-256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '-256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '-256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '0px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '0px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-512px', top: '-256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '-256px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '0px'}} /><div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '512px', top: '256px'}} /></div></div></div><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}><div style={{position: 'absolute', zIndex: 991, transform: 'matrix(1, 0, 0, 1, -100, -189)'}}><div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=70038" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=84496" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=107953" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=93495" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=85128" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i303!4i256!2m3!1e0!2sm!3i476185504!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46831" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i302!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=10814" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i301!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=118428" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i301!4i256!2m3!1e0!2sm!3i476185636!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=43995" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=905" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=24362" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=61671" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=38214" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46581" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=94061" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div></div></div></div><div className="gm-style-pbc" style={{zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', opacity: 0}}><p className="gm-style-pbt" /></div><div style={{zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}><div style={{zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 104, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 105, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 106, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 107, width: '100%'}} /></div></div></div><iframe aria-hidden="true" style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none'}} src="about:blank" frameBorder={0} /><div style={{marginLeft: '5px', marginRight: '5px', zIndex: 1000000, position: 'absolute', left: '0px', bottom: '0px'}}><a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=-31.197,150.744&z=9&t=m&hl=en-US&gl=US&mapclient=apiv3" title="Open this area in Google Maps (opens a new window)" style={{position: 'static', overflow: 'visible', float: 'none', display: 'inline'}}><div style={{width: '66px', height: '26px', cursor: 'pointer'}}><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', width: '66px', height: '26px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px'}} /></div></a></div><div style={{backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: '300px', height: '180px', position: 'absolute', left: '315px', top: '150px'}}><div style={{padding: '0px 0px 10px', fontSize: '16px', boxSizing: 'border-box'}}>Map Data</div><div style={{fontSize: '13px'}}>Map data ©2019 Google</div><button draggable="false" title="Close" aria-label="Close" type="button" className="gm-ui-hover-effect" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', top: '0px', right: '0px', width: '37px', height: '37px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{pointerEvents: 'none', display: 'block', width: '13px', height: '13px', margin: '12px'}} /></button></div><div className="gmnoprint" style={{zIndex: 1000001, position: 'absolute', right: '166px', bottom: '0px', width: '121px'}}><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a style={{textDecoration: 'none', cursor: 'pointer', display: 'none'}}>Map Data</a><span>Map data ©2019 Google</span></div></div></div><div className="gmnoscreen" style={{position: 'absolute', right: '0px', bottom: '0px'}}><div style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '11px', color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)'}}>Map data ©2019 Google</div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{zIndex: 1000001, userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '95px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener" style={{textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)'}}>Terms of Use</a></div></div><button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" className="gm-control-active gm-fullscreen-control" style={{background: 'none rgb(255, 255, 255)', border: '0px', margin: '10px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: '2px', height: '40px', width: '40px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', overflow: 'hidden', top: '0px', right: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '0px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" href="https://www.google.com/maps/@-31.197,150.744,9z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative'}}>Report a map error</a></div></div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={40} controlheight={81} style={{margin: '10px', userSelect: 'none', position: 'absolute', bottom: '95px', right: '40px'}}><div className="gmnoprint" controlwidth={40} controlheight={81} style={{position: 'absolute', left: '0px', top: '0px'}}><div draggable="false" style={{userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: '40px', height: '81px'}}><button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: '0px'}} /><button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button></div></div><div className="gmnoprint" controlwidth={40} controlheight={40} style={{display: 'none', position: 'absolute'}}><div style={{width: '40px', height: '40px'}}><button draggable="false" title="Rotate map 90 degrees" aria-label="Rotate map 90 degrees" type="button" className="gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'none', border: '0px', margin: '0px 0px 32px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button><button draggable="false" title="Tilt map" aria-label="Tilt map" type="button" className="gm-tilt gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /></button></div></div></div></div></div><div style={{backgroundColor: 'white', fontWeight: 500, fontFamily: 'Roboto, sans-serif', padding: '15px 25px', boxSizing: 'border-box', top: '5px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '5px', left: '50%', maxWidth: '375px', position: 'absolute', transform: 'translateX(-50%)', width: 'calc(100% - 10px)', zIndex: 1}}><div><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg" draggable="false" style={{padding: '0px', margin: '0px', border: '0px', height: '17px', verticalAlign: 'middle', width: '52px', userSelect: 'none'}} /></div><div style={{lineHeight: '20px', margin: '15px 0px'}}><span style={{color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px'}}>This page can't load Google Maps correctly.</span></div><table style={{width: '100%'}}><tbody><tr><td style={{lineHeight: '16px', verticalAlign: 'middle'}}><a href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors" target="_blank" rel="noopener" style={{color: 'rgba(0, 0, 0, 0.54)', fontSize: '12px'}}>Do you own this website?</a></td><td style={{textAlign: 'right'}}><button className="dismissButton">OK</button></td></tr></tbody></table></div></div>
    </div>
    <div className="row">
      <div className="col-12">
        <h2 className="contact-title">Get in Touch</h2>
      </div>
      <div className="col-lg-8">
        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message" defaultValue={""} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input className="form-control valid" name="name" id="name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input className="form-control valid" name="email" id="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" type="email" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input className="form-control" name="subject" id="subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" type="text" />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="button button-contactForm boxed-btn">Send</button>
          </div>
        </form>
      </div>
      <div className="col-lg-3 offset-lg-1">
        <div className="media contact-info">
          <span className="contact-info__icon"><i className="ti-home" /></span>
          <div className="media-body">
            <h3>Buttonwood, California.</h3>
            <p>Rosemead, CA 91770</p>
          </div>
        </div>
        <div className="media contact-info">
          <span className="contact-info__icon"><i className="ti-tablet" /></span>
          <div className="media-body">
            <h3>+1 253 565 2365</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <div className="media contact-info">
          <span className="contact-info__icon"><i className="ti-email" /></span>
          <div className="media-body">
            <h3>support@colorlib.com</h3>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
      </div>
      {/* Want To Work End */}
    </main>
    <footer>
      {/* Footer Start*/}
      <div className="footer-area">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    {/* logo */}
                    <div className="footer-logo">
                      <a href="index.html"><img src="/img/logo/logo2_footer.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Services</h4>
                    <ul>
                      <li><a href="#">Marketing</a></li>
                      <li><a href="#"> SEO Service</a></li>
                      <li><a href="#">Digital market</a></li>
                      <li><a href="#">Content create</a></li>
                      <li><a href="#">Find Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Customer Care</h4>
                    <ul>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">News &amp; Articles</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#"> Terms of Use</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4><span>+564</span> 7885 3222</h4>
                    <ul>
                      <li><a href="#">youremail@gmail.com</a></li>
                    </ul>
                    <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                  </div>
                  {/* footer social */}
                  <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fas fa-globe" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-xl-12 ">
                <div className="footer-copy-right">
                  <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This website is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="http://sargatechnology.com/" target="_blank">Sarga Technology</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End*/}
    </footer>
    {/* Scroll Up */}
    <div id="back-top">
      <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
    </div>
        
  </div> 

      
)
} 
}  
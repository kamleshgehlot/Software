import React, { Component} from 'react';


export default class Ourworks extends Component {
    render()
  
    {
     
        return(
            <div>

<div className="wantToWork-area w-padding3" id="Our Works">
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
            <h4>Software Product Development</h4>
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

   
</div>
      
      )
    } 
    }  
import React, { Component} from 'react';

export default class About extends Component {
    render()
  
    {
     
        return(
            <div>
  <div className="visit-tailor-area fix" id="About">
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
    
</div>
      
)
} 
}  
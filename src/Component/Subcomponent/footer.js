import React, { Component} from 'react';


export default class Footer extends Component {
    render()
  
    {
     
        return(
            <div>
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
    <div id="back-top">
      <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
    </div>
</div>

      
      )
    } 
    }  
import React, { Component } from 'react';
// import APIs from '../api/APIs.js'

import APIs from '../api/APIs.js'

const handleSendMail = async (e) => {
  e.preventDefault();
  try{
    const result = await APIs.sendMail({
      name: document.getElementById('name').value,
      subject: document.getElementById('subject').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    });
    if(result.sent === true){          
      document.getElementById('name').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      alert('Mail sent successfully.');
    }
  }catch(e){
    console.log(e);
  }
}

export default class Contact extends Component {
    render()
  
    {
     
        return(
    
            <div id ="Contact">
            
            <main>
            <div className="wantToWork-area w-padding" >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                
                <h2>Contact Us</h2>
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
              <section className="contact-section">
              
                <div className="container">
                
                  <div className="d-none d-sm-block mb-5 pb-4">
                  <section className="footer-bottom" id="contact" style={{backgroundColor: '#C5E4E7'}}>
          <div className="address_mail_footer_grids">
            <iframe src="https://maps.google.com/maps?q=73%20Rama%20Lane%2C%20Talab%20Tillo%2C%20Jammu%20Tawi%2C%20Pin%20180005%20&t=&z=13&ie=UTF8&iwloc=&output=embed"   style={{width:'100%',height:'500px'}} />
          
          </div>
        </section>
                
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
                          <button type="submit" onClick={handleSendMail} value="Send Message"  className="button button-contactForm boxed-btn">Send</button>
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
              {/* ================ contact section end ================= */}
            </main>
          
          </div>
          
    )
    }
    }
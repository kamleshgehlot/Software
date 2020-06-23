import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Home from './Component/index.js'
import About from './Component/About.js'
import Contact from './Component/Contact.js'
import Footer from './Component/Subcomponent/footer.js'
import Header from './Component/Subcomponent/Header.js'
import Whyus from './Component/Whyus.js'
import OurWorks from './Component/Ourworks.js'
import OurExpertise from './Component/OurExpertise.js'
import OurGolas from './Component/OurGoals.js'
import Portfolios from './Component/Portfolios.js'
import Services from './Component/Services.js'


      function App() {
        return (
          <div>
                <Router>
                  
                <Header/>
                <Whyus/>
                <About/>
                {/* <OurWorks/> */}
                <Services/>
                <OurExpertise/>
                <OurGolas/>
                <Portfolios/>
                <Contact/>
                <Footer/> 
                
                </Router>  
     
          </div>
        );
      }

export default App;

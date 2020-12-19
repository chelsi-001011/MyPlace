import React from 'react';
import ReactDom from "react-dom";
import './App.css';
import './background.css';
import {ReactComponent as ReactLogo} from './background.svg';
import link from './link-solid.svg';
import './progressbar.js';
import  {useState, useEffect, useCallback} from 'react';

import Jumbotron from './jumbotron.js';
import Education from './education.js';
import Skills from './skills.js';
import Projects from './projects.js';
import Extracurriculars from './extracurr.js';
import ContactMe from './contactbadge.js';
import Contacts from './contacts.js';
import './scroll.js';
const ProgressBar = () => {
  return(
    <div class="progress-container">
      <div class="progress-bar" id="bar"></div>
    </div>
  );
}

const Footer = () => {
  return(
    <section className="footer">
      <div className="footer-2">Made with <i class="fas fa-heart"></i> by Chelsi Rawat</div>
      <div className="social-container footer-1">
        <a href="https://github.com/chelsi-001011" className="social"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/ChelsiRawat" className="social"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/chelsirawat/" className="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </section>
  );
}

const ScrollTopArrowComponent = () => {
  // Track whether the scroll arrow is needed.
  const [showScroll, setShowScroll] = useState(null);
  // Check the scroll state, re-memoize when scroll state changes.
  const checkScrollTop = useCallback(
    () => {
      const headerHeight = 400;

      if (!showScroll && window.pageYOffset > headerHeight) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= headerHeight) {
        setShowScroll(false);
      }
    },
    [showScroll],
  );
  // Add/remove the event listener when the component is unmounted or the scroll state has changed.
  useEffect(
    () => {
      window.addEventListener('scroll', checkScrollTop);
      return () => window.removeEventListener('scroll', checkScrollTop);
    },
    [checkScrollTop],
  );

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scrollTop">
      <button className="scrollButton"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <span className="fa fa-angle-double-up" />
      </button>
    </div>
  );
};
function App () {
  return (
  	<div>
      <ScrollTopArrowComponent />
      <ProgressBar/>
      <ReactLogo className="background"/>
      <div id="body" className="container">
        <Jumbotron/>
        <div className="shift-right">
          <ContactMe/>
        </div>
        <h3 className="quote">College & Code & Coffee</h3>
        <Education/>
        <Skills/>
        <Projects />
        <Extracurriculars />
        <Contacts/>
      </div>
      <Footer/>
    </div>
    );
}

ReactDom.render(<App />, document.getElementById("root"));

export default App;
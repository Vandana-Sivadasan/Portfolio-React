// ES6 Imports
import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
 
 
 
class Section extends React.Component {

  render() {
  	return (
      <div>
        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} offset={50} duration={500}>
          Test 1
        </Link>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>
        <button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </button>
 
        <Element name="test1" className="element">
          test 1
        </Element>
 
        <Element name="test2" className="element">
          test 2
        </Element>
 
        <div id="anchor" className="element">
          test 6 (anchor)
        </div>
 
 
        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>
 
        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>


        <div className="element" id="containerElement" style={{marginTop:`2000px`}}>
          <Element name="firstInsideContainer">
            first element inside container
          </Element>
 
          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>
 
      </div>
    );
  }
};
 
export default Section
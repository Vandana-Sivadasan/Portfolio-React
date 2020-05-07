import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Col } from "reactstrap"
import bioImage from "../data/images/villagergamepic.jpg";

export default function Footer() {
  return (
    <Element name="aboutSection" className="section">
      <h1>Hi! I'm Vandana</h1>
        <Row>
          <Col xs={12} md={6}>
            <img src={bioImage} style={{width:`100%`}}/>
          </Col>
          <Col xs={12} md={6}>
          <p>
          I am a Software Developer.My goal is to achieve success in the IT Industry.I played major role as a Project
            Manager.I can be a good asset to the company.Fluent in oral and written communication. Computer languages
            that i know are, C++ C SQL HTML CSS JAVASCRIPT Codejs,My SQL,Mongo DB,Mongoose.
        </p>
          </Col>
        </Row>
    </Element>
  );
}
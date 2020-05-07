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
            This is my bio. This is my bio. This is my bio. This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.This is my bio. This is my bio. This is my bio.
        </p>
          </Col>
        </Row>
    </Element>
  );
}
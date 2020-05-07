import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Col, FormGroup,Label,Input,Button,Form } from "reactstrap";


export default function Footer() {
  return (
    <Element name="contactSection" className="section">
      <h1>Contact Section</h1>
      <Row>
        <Col xs={6}>
          <a href="https://www.linkedin.com/in/vandana-sivadasan-61aba5198/">LinkedIn</a>
        </Col>
        <Col xs={6}>
          <a href="https://github.com/Vandana-Sivadasan">GitHub</a>
        </Col>

        <Col xs={12}>
        <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplename" className="mr-sm-2">name</Label>
        <Input type="text" name="name" id="examplename" placeholder="Name" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleemail" className="mr-sm-2">email</Label>
        <Input type="email" name="email" id="exampleemail" placeholder="Email!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
        
        </Col>

      </Row>
    </Element>
  );
}
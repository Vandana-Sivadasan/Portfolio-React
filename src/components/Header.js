import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link activeClass="active" to="aboutSection" spy={true} smooth={true} offset={0} duration={1000}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" to="projectSection" spy={true} smooth={true} offset={0} duration={1000}>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" to="contactSection" spy={true} smooth={true} offset={0} duration={1000}>
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
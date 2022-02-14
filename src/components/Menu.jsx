import React from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  Container,
  Form,
  Nav,
  FormControl,
  Button,
  Offcanvas
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';


class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <img
            className="logo-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/45px-React.svg.png"
          />
          <i className="fas fa-user-graduate" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
              {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}
export default Menu;
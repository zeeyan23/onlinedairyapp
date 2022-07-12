import React from 'react'
import {Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';

export const NavigationBar = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>My Dairy</Navbar.Brand>
          <Link to="/showdairy" className="nav-link text-light btn btn-outline-info">List of Diary</Link>
        </Container>
        </Navbar>
  )
}

export default NavigationBar;
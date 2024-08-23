import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BellFill, GearFill } from 'react-bootstrap-icons';
import './App.css'; // Ensure this path is correct based on your project structure

const DashboardNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-3 full-width-navbar">
      <Navbar.Brand href="#">Dashboard</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Centered Search Bar */}
        <Form className="mx-auto d-flex" style={{ maxWidth: '500px', flex: 1 }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>

        <Nav className="ms-auto">
          {/* Reminder Icon */}
          <Nav.Link href="#reminder">
            <BellFill color="black" size={20} />
          </Nav.Link>

          {/* Settings Icon */}
          <Nav.Link href="#settings">
            <GearFill color="black" size={20} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardNavbar;
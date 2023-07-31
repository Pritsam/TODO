// import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Header = () => {

  return (
    <Navbar expand="lg" className="mb-4" style={{backgroundColor: '#7FFFD4'}} >
      <Container>
        <Navbar.Brand href="#">TODO</Navbar.Brand>
      </Container>
    </Navbar>
  );
};


import { Navbar, Nav } from "react-bootstrap";

import React from 'react';

const Menu = () => {
    return (
      <>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Reactomon</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/pokemons">Pokemon List</Nav.Link>
          <Nav.Link href="/typelist">Type List</Nav.Link>
        </Nav>
      </Navbar>
    </>
    )
}



export default Menu;
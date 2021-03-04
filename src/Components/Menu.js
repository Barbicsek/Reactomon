
import { Navbar, Nav } from "react-bootstrap";
import React, { useContext } from 'react';
import ToggleTheme from './ToggleTheme';

import { ThemeContext } from '../Contexts/ThemeContext';


const Menu = () => {

  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode' : '';
    return (
      <div className={"navbar" + (theme)}>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Reactomon</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokemons">Pokemon List</Nav.Link>
              <Nav.Link href="/typelist">Type List</Nav.Link>
              <Nav.Link href="/catchedpokemons">Catched pokemons</Nav.Link>
            </Nav>
        </Navbar>
        <ToggleTheme />
      </div>
    )
}



export default Menu;
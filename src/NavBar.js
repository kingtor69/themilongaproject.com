import React, {useState} from 'react';
import { 
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import imageRefs from './imageRefs';

import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <Navbar 
      className="NavBar sticky-top"
      color="light" 
      light
      expand="md"
      fixed="top"
    >
      <NavbarBrand href="/">
        <img 
          className="NavBar-brand-img" 
          src={imageRefs.brand} 
          alt="Milonga" 
        />
      </NavbarBrand>
      <NavbarToggler onClick={handleToggle} />
      <Collapse 
        isOpen = {isOpen}
        navbar
      >
        <Nav 
          className="ml-auto" 
          navbar
        >
          <NavItem>
            <NavLink href="/#Process">The Process</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#Bios">About the Creators</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#Credits">Credits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#BTS">Behind the Scenes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#Contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default NavBar;

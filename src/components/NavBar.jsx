import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss'

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* reactstrap add expand='md' to make it responsive*/}
      <Navbar {...args} expand='md' fixed="top" color="light" position="sticky" container>
        {/* <div className="navbar-parent-container"> */}
          <NavbarBrand href="/">Edwin Sanjaya</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='navbar-collapse'>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/gaming-journey">Gaming Journey</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about-website">About Website</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        {/* </div> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
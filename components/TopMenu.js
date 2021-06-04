import React, { useState } from "react";
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
  Input
} from "reactstrap";

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Libreria Nacional</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Institucionales</DropdownItem>
                <DropdownItem>Documentales</DropdownItem>
                <DropdownItem>Detectives</DropdownItem>
                <DropdownItem>Misterio</DropdownItem>
                <DropdownItem>Aventura</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>All</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/signin">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">Carro</NavLink>
            </NavItem>
            <Input placeholder="Buscar" />
          </Nav>
          <NavbarText>Compra Ya!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;

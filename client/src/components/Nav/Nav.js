import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";


const Nav = () => (

  <Navbar className= "nav  grey darken-1">
  <a href="/" className="brand-logo center">Endangered Species Information</a>
  <div className="listwrapper">
    <NavItem href='/'>Home</NavItem>
    <NavItem href='#'>Saved Animals</NavItem>
  </div>
</Navbar>
);

export default Nav;

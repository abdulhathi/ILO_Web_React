import { Component } from "react";
import NavLogo from "./nav-logo/nav-logo.component";
import NavMenu from "./nav-menu/nav-menu.component";
import NavToggler from "./nav-toggler/nav-toggler.component";
import "./navbar.styles.scss";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar--container">
        <NavLogo></NavLogo>
        <NavToggler></NavToggler>
        <NavMenu></NavMenu>
      </nav>
    );
  }
}

export default Navbar;

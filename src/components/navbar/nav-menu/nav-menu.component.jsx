import { Component } from "react";
import "./nav-menu.styles.scss";

class NavMenu extends Component {
  render() {
    return (
      <ul class="nav--menu list">
        <li class="list--item nav--menu--item">
          <a href="#">Home</a>
        </li>
        <li class="list--item nav--menu--item">
          <a href="#">About</a>
        </li>
        <li class="list--item nav--menu--item">
          <a href="#">Service</a>
        </li>
        <li class="list--item nav--menu--item">
          <a href="#">Project</a>
        </li>
        <li class="list--item nav--menu--item">
          <a href="#">Pages</a>
        </li>
        <li class="list--item nav--menu--item">
          <a href="#">contact</a>
        </li>
      </ul>
    );
  }
}

export default NavMenu;

import { Component } from "react";
import "./header.styles.scss";
import HeaderContent from "./header-content/header-content.component";
import HeaderImage from "./header-image/header-image.component";

class Header extends Component {
  render() {
    return (
      <section className="header--container header--1x2">
        <HeaderContent></HeaderContent>
        <HeaderImage></HeaderImage>
      </section>
    );
  }
}
export default Header;

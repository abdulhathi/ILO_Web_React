import { Component } from "react";
import codingImage from "../../../assets/images/coding.png";
import "./header-image.styles.scss";

class HeaderImage extends Component {
  render() {
    return <img className="header-image-container" src={codingImage} alt=""></img>;
  }
}
export default HeaderImage;

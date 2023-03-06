import { Component } from "react";
import "./header-content.styles.scss";
import ButtonLight from "../../../core-components/buttons/button-light/button-light.component";
import ButtonOutline from "../../../core-components/buttons/button-outline/button-outline.component";
import HeadingOne from "../../../core-components/headings/heading-one/heading-one.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";

class HeaderContent extends Component {
  render() {
    return (
      <div className="heading--container">
        <HeadingOne text="Islamic Library Online"></HeadingOne>
        <HeadingThree
          text="Would they not think about this Quran? If it had come from someone
          other than Allah they would have seen much contradiction in it. [Al
          Qur'an 4:82]"
          isPrimary
        ></HeadingThree>
        <div className="btn--container">
          <ButtonLight text="Read More"></ButtonLight>
          <ButtonOutline text="Contact Us"></ButtonOutline>
        </div>
      </div>
    );
  }
}

export default HeaderContent;

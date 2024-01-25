import { Container } from "./styles";
import wordpress from "../../assets/image/projects/wordpress.svg";
import shopify from "../../assets/image/projects/shopify.svg";
import htmlIcon from "../../assets/image/projects/html-icon.svg";
import cssIcon from "../../assets/image/projects/css-icon.svg";
import jsIcon from "../../assets/image/projects/js-icon.svg";
import nodeIcon from "../../assets/image/projects/node-icon.svg";
import reactIcon from "../../assets/image/projects/react-icon.svg";
import typescriptIcon from "../../assets/image/projects/typescript-icon.svg";
import vueIcon from "../../assets/image/projects/vue-icon.svg";
import boostrapIcon from "../../assets/image/projects/bootstrap-icon.svg";

import quentinZimmerer from '../../assets/image/headshot.jpeg';


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        {/* <ScrollAnimation animateIn="fadeInLeft"> */}
        <h2>About me</h2>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}> */}
        <p>
          I'm Quentin Zimmerer, a Front-End Developer passionate about crafting awesome websites. I started my web journey in January 2023 and love learning and improving every day.
        </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}> */}
        <p>
          📚 Learning Path: I began on FreeCodeCamp, mastering HTML, CSS, and basic JavaScript for user-friendly websites. Now, I'm diving deeper with Coursera courses for advanced front-end development.</p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}> */}
        <p>
          So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</p>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}> */}
        <h3>Here are my main skills:</h3>
        {/* </ScrollAnimation> */}
        <div className="hard-skills">

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}> */}
            <img src={wordpress} alt="Wordpress" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}> */}
            <img src={shopify} alt="shopify" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}> */}
            <img src={reactIcon} alt="React" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}> */}
            <img src={typescriptIcon} alt="Typescript" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}> */}
            <img src={vueIcon} alt="Vue" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}> */}
            <img src={nodeIcon} alt="Node" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}> */}
            <img src={htmlIcon} alt="Html" />
            {/* </ScrollAnimation> */}
          </div>

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}> */}
            <img src={cssIcon} alt="Css" />
            {/* </ScrollAnimation> */}
          </div>

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}> */}
            <img src={boostrapIcon} alt="bootstrap" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}> */}
            <img src={jsIcon} alt="JavaScript" />
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </div>
      <div className="about-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}> */}
        <img src={quentinZimmerer} alt="Quentin A. Zimmerer" />
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  )
}

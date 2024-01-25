import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { NavHashLink } from "react-router-hash-link"


import Illustration from "../../assets/image/projects/illustration.svg";
import linkedin from '../../assets/image/projects/linkedin.svg'
import githubIcon from '../../assets/image/projects/github.svg'
import whatsapp from '../../assets/image/projects/whatsapp.svg'
import Hello from '../../assets/image/projects/Hello.gif'
// import telegram from '../../assets/image/projects/telegram.svg'
import instagram from '../../assets/image/projects/instagram.svg'

// Aos Library
// import aos from 'aos';
import "aos/dist/aos.css"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        {/* <ScrollAnimation animateIn="fadeInUp"> */}
        {/* <div data-aos="fade-up"> */}
        <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        {/* </div> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
        <h1>Quentin A. Zimmerer</h1>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> */}
        <h3>Software Developer</h3>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> */}
        <p className="small-resume">1 Years of Experience</p>
        {/* </ScrollAnimation> */}


        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            // marginTop: '1px'
          }}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
          {/* </ScrollAnimation> */}

          {/* <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}> */}
          <div className="social-media"><a
            href="https://www.linkedin.com/in/quentin-zimmerer/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/QuentinZimmerer"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%+1(845)545-8276&text=Hello+Quentin"
              target="_blank"
              rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/quentinzimmerer/"
              target="_blank"
              rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          {/* </ScrollAnimation> */}
        </div>

      </div>
      <div className="hero-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}> */}
        <img src={Illustration} alt="Ilustração" />
        {/* </ScrollAnimation> */}
      </div>

    </Container>

  )
}
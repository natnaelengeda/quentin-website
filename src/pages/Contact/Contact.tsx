import { Container } from "./styles";
import emailIcon from "../../assets/image/projects/email-icon.svg";
import phoneIcon from "../../assets/image/projects/phone-icon.svg"


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:quentin@quentin-zimmerer.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:quentin@quentin-zimmerer.com">quentin@quentin-zimmerer.com</a>
        </div>
        <div>
          <a href="tel:+1(845)5458276"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+1(845)5458276">+1 (845) 545-8276</a>
        </div>
      </div>
    </Container>
  )
}
import { Container } from './styles'

import reactIcon from '../../assets/image/projects/react-icon.svg'
import linkedin from '../../assets/image/projects/linkedin.svg'
import githubIcon from '../../assets/image/projects/github.svg'
import whatsapp from '../../assets/image/projects/whatsapp.svg'
import instagramIcon from '../../assets/image/projects/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://quentin-zimmerer.com/" className="logo">
        <span>quentin-zimmrer.com</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        <a
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
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>

        <a
          href="https://www.instagram.com/quentinzimmerer/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

      </div>
    </Container>
  )
}

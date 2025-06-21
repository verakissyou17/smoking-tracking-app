import { FooterContainer } from "../styles/Footer.styled.jsx";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <small>© {currentYear} Smoking Tracker. All rights reserved. </small>
      <small>Made with ❤️ by Vera.</small>
    </FooterContainer>
  );
}

export default Footer;

import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./Contact.module.css";
import styled from "styled-components";

const StyledFooterText = styled.p`
  font-size: 0.6rem;
`;

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>CONTACT</main>
      <Footer>
        <StyledFooterText>all right reserved</StyledFooterText>
      </Footer>
    </div>
  );
}

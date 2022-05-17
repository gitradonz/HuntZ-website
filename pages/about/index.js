import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./About.module.css";

import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
`;

const StyledText = styled.span`
  color: var(--primaryColor);
  transition: all 0.6s ease;
  cursor: default;
  &:hover {
    color: var(--secondaryColor);
  }
`;

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <StyledTitle>
          Train your <StyledText>reflexes</StyledText> and
          <StyledText> warm up</StyledText> with HUNTZ !
        </StyledTitle>
        <p>
          With the growing of e-sports scene, all competitive players around the
          world want to improve their skill and prove they are the best ones.
        </p>
        <p>
          For this we created HuntZ, to help the most demanding ones to get that
          rank 1 helping them to improve their reflexes and warm up before they
          enter the game.
        </p>
        <p>
          HuntZ is a small game you can install and play within a few minits,
          with no configuration and an online ranking and community.
        </p>
      </main>
      <Footer />
    </div>
  );
}

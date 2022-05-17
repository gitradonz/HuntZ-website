import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./About.module.css";

import styled from "styled-components";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <StyledTitle>
          Train your <StyledText>reflexes</StyledText> and
          <StyledText> warm up</StyledText> with HUNTZ !
        </StyledTitle>
        <div className={styles.paragraph}>
          <Image
            src="/github.svg"
            alt="gthubImage"
            width="120px"
            height="120px"
          />
          <StyledP>
            With the growing of e-sports scene, all competitive players around
            the world want to improve their skill and prove they are the best
            ones.
          </StyledP>
        </div>
        <div className={styles.paragraph}>
          <Image
            src="/github.svg"
            alt="gthubImage"
            width="120px"
            height="120px"
          />
          <StyledP>
            For this we created HuntZ, to help the most demanding ones to get
            that rank 1 helping them to improve their reflexes and warm up
            before they enter the game.
          </StyledP>
        </div>
        <div className={styles.paragraph}>
          <Image
            src="/github.svg"
            alt="gthubImage"
            width="120px"
            height="120px"
          />
          <StyledP>
            HuntZ is a small game you can install and play within a few minits,
            with no configuration, and you have access to online ranking and
            community*.
          </StyledP>
        </div>
      </main>
      <Footer>
        <div>
          Game developed by{" "}
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.radonz.com"
          >
            RadoNz
          </StyledLink>
        </div>
      </Footer>
    </div>
  );
}

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

const StyledLink = styled.a`
  color: var(--grayDark);
  transition: all 0.6s ease;
  &:hover {
    color: var(--primaryColor);
  }
`;

const StyledP = styled.p`
  color: var(--black);
  font-size: 1.2rem;
`;

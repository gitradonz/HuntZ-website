import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const StyledTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
`

const StyledContent = styled.span`
  font-size: 1rem;
  text-align: end;
`

const StyledAnchor = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-size: 1rem;
  `


export default function Home() {
  return (
    <>
      <Head>
        <title>HUNTZ</title>
        <meta
          name="description"
          content="Pablo Rios website, generated with next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header style={styles.header} />
        <h1 className={styles.title}>
          {/* Welcome to <span className={styles.span}>HuntZ</span> */}
          <Image src="/huntzLogo.png" alt="huntzLogo" width={800} height={400} />
        </h1>
        <div className={styles.main}>
         <StyledTitle>
          GAME DOWNLOAD IS <strong>AVAILABLE</strong> !! 
          </StyledTitle>
        </div>
        <div className={styles.main}>
        <Image src="/huntzMenu.png" alt="huntzMenuImage" width={877} height={500}/> 
        <Image src="/huntz.png" alt="huntzImage" width={877} height={500}/>
        </div>
        <div className={styles.main}>

        <StyledContent>
            Contact with me <StyledAnchor href="mailto:pabloriosrdn@gmail.com">via mail</StyledAnchor> if you want to be a tester!
          </StyledContent>
          </div>

        {/* <div className={styles.main}>
          
          
          
        
        </div> */}
        

        <Footer>
          <a
            href="https://github.com/gitradonz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <Image src="/react.svg" alt="reactImage" width="30px" height="30px" />
          <Image
            src="/vercel.svg"
            alt="vercelImage"
            width="50px"
            height="50px"
          />
        </Footer>
      </div>
    </>
  )
}

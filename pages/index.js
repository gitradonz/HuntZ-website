import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Ríos - Home</title>
        <meta
          name="description"
          content="Pablo Rios website, generated with next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header style={styles.header} />
        <h1 className={styles.title}>
          Welcome to <span className={styles.span}>test web</span>
        </h1>
        <main className={styles.main}>CONTENIDO EN EL MAIN</main>

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

import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>ABOUT</main>
      <Footer />
    </div>
  )
}

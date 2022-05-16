import Footer from '../../components/footer'
import Header from '../../components/header'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>CONTACT</main>
      <Footer />
    </div>
  )
}

import styles from './Projects.module.css'

import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>PROJECTS</main>
      <Footer />
    </div>
  )
}

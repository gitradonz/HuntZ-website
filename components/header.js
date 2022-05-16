import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({ style }) {
  return (
    <nav className={style ? style : styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/ranking">Ranking</Link>
    </nav>
  )
}

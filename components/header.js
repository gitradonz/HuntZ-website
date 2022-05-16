import Link from 'next/link'
import styles from '../styles/Header.module.css'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: red;
  font-size: 20px;
`
export default function Header({ style }) {
  return (
    <nav className={style ? style : styles.header}>
      <StyledLink href="/">Home</StyledLink>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/huntz">HuntZ</Link>
    </nav>
  )
}

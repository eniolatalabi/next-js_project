import React from 'react'
import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Moonboy</div>
      <Links />
    </div>
  )
}

export default Navbar

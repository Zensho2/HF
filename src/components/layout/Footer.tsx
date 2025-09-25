import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <img
            src="/logo.png"
            alt="Logo"
            className={styles.logo}
            width={80}
            height={80}
          />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className={styles.contact}>📞 01 23 45 67 89</p>
          <p className={styles.contact}>✉️ contact@example.com</p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <nav className={styles.nav}>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/our-services">Nos services</NavLink>
            <NavLink to="/our-work">Nos réalisations</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cgu">CGU</NavLink>
            <NavLink to="/sitemap">Plan du site</NavLink>
          </nav>
          <NavLink to="/contact" className={styles.cta}>
            Contactez-nous
          </NavLink>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} HF. Tous droits réservés.</p>
    </footer>
  )
}

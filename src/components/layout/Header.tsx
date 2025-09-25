import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/our-services', label: 'Nos services' },
  { to: '/our-work', label: 'Nos réalisations' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.logoBox}>LOGO</div>
        <nav className={styles.nav}>
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => {
                const base = styles.linkBox
                if (item.to === '/') return `${base} ${styles.filled}`
                return base
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}




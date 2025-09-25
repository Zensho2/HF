import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/our-services', label: 'Nos services' },
  { to: '/our-work', label: 'Nos réalisations' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down → hide
        setShowHeader(false)
      } else {
        // scrolling up → show
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const screenHeight = window.innerHeight
      if (e.clientY < screenHeight / 4) {
        setShowHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [lastScrollY])

  return (
    <header className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
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

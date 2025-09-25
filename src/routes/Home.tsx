import { NavLink } from 'react-router-dom'
import { services } from '@/data/services'
import { projects } from '@/data/portfolio'
import styles from './Home.module.css'

export default function Home() {
  const teaserServices = services.slice(0, 3)
  const firstWork = projects[0]

  return (
    <div>
      <div className={`${styles.hero} ${styles.bleed}`}>
        <div className={styles.bg} />
        <div className={styles.overlay} />
        <div className={styles.noise} />
        <div className={styles.content}>
          <div className={styles.tag}>Ingénierie & Construction Excellence et précision</div>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos services</h2>
        <div className={styles.grid}>
          {teaserServices.map(s => (
            <article key={s.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.summary}</p>
            </article>
          ))}
        </div>
        <NavLink className={styles.more} to="/our-services">lire la suite →</NavLink>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos réalisations</h2>
        <article className={styles.workCard}>
          <div className={styles.workBg} style={{ backgroundImage: `url(${firstWork.image})` }} />
          <div className={styles.workOverlay} />
          <div className={styles.workInner}>
            <div className={styles.workSummary}>{firstWork.summary}</div>
            <div className={styles.workTitle}>{firstWork.title}</div>
          </div>
        </article>
        <NavLink className={styles.more} to="/our-work">lire la suite →</NavLink>
      </section>
    </div>
  )
}




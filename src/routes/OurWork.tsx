import { projects } from '@/data/portfolio'
import styles from './OurWork.module.css'

export default function OurWork() {
  return (
    <div>
      {projects.map((p) => (
        <section key={p.id} className={`${styles.section} ${styles.bleed}`}>
          <div className={styles.bg} style={{ backgroundImage: `url(${p.image})` }} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.summary}>{p.summary}</div>
            <h2 className={styles.title}>{p.title}</h2>
            <p className={styles.desc}>{p.description}</p>
          </div>
        </section>
      ))}
    </div>
  )
}




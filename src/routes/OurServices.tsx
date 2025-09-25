import styles from './OurServices.module.css'

type Item = {
  icon: string
  title: string
  desc: string
}

const items: Item[] = [
  { icon: '🏗️', title: 'Conception structurelle', desc: 'Calculs et plans pour bâtiments, passerelles et ouvrages.' },
  { icon: '📐', title: 'Génie civil & VRD', desc: 'Études de voirie, réseaux, terrassement et assainissement.' },
  { icon: '🏢', title: 'Ingénierie bâtiment', desc: 'Plans d’exécution, détails techniques et coordination TCE.' },
  { icon: '🧱', title: 'Diagnostic & renforcement', desc: 'Audit structurel, pathologies, renforcement et reprise en sous-œuvre.' },
  { icon: '🌿', title: 'Performance énergétique', desc: 'Optimisation thermique, matériaux durables, ACV et RE2020.' },
  { icon: '📝', title: 'Assistance à maîtrise d’ouvrage', desc: 'Cahiers des charges, planning, suivi et contrôle qualité.' }
]

export default function OurServices() {
  return (
    <div className={styles.wrap}>
      <section className={styles.container}>
        <h1 className={styles.title}>Nos services</h1>
        <p className={styles.subtitle}>Bureau d’ingénierie et de construction • Expertise, précision, conformité</p>
        <div className={styles.grid}>
          {items.map((s) => (
            <article key={s.title} className={styles.card}>
              <div className={styles.icon} aria-hidden>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}




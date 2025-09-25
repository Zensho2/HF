import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page introuvable</h1>
      <p>Nous n’avons pas trouvé la page recherchée.</p>
      <p style={{ marginTop: '1rem' }}>
        <NavLink to="/">Retour à l’accueil</NavLink>
      </p>
    </section>
  )
}




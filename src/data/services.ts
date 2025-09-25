export type Service = {
  id: string
  title: string
  summary: string
}

export const services: Service[] = [
  { id: 'consulting', title: 'Conseil', summary: 'Stratégie et accompagnement pour aligner business et tech.' },
  { id: 'design', title: 'Design', summary: 'Design produit et marque orienté résultats.' },
  { id: 'development', title: 'Développement', summary: 'Ingénierie web et app avec les meilleures pratiques.' },
  { id: 'support', title: 'Support', summary: 'Maintenance fiable et itération après lancement.' }
]




import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  title?: string
  subtitle?: string
}>

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section style={{ margin: '2rem 0' }}>
      {title ? <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h2> : null}
      {subtitle ? <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{subtitle}</p> : null}
      {children}
    </section>
  )
}




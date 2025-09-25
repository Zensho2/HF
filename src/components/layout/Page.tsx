import { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './Page.module.css'

type PageProps = PropsWithChildren<{
  title?: string
  description?: string
}>

export default function Page({ title, description, children }: PageProps) {
  return (
    <main className={styles.main}>
      <Helmet>
        {title ? <title>{title} • HF</title> : null}
        {description ? <meta name="description" content={description} /> : null}
      </Helmet>
      {children}
    </main>
  )
}




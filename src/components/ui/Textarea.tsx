import { TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.css'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: TextareaProps) {
  return <textarea {...props} className={styles.textarea} />
}




import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import styles from './Contact.module.css'

const schema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Un email valide est requis'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Le message est requis')
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>()

  const onSubmit = async (values: FormValues) => {
    await new Promise(r => setTimeout(r, 500))
    console.log(values)
  }

  return (
    <section>
      <div className={`${styles.hero} ${styles.bleed}`}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroNoise} />
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Vous avez un projet ? Contactez nous</div>
        </div>
      </div>

      <div className={styles.formWrap}>
        {isSubmitSuccessful ? (
          <p>Merci ! Nous reviendrons vers vous très vite.</p>
        ) : (
          <div className={styles.card}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.grid}>
              <label className={styles.label}>
                <div>Nom</div>
                <Input {...register('name')} placeholder="Votre nom" />
                {errors.name && <small className={styles.error}>{errors.name.message}</small>}
              </label>
              <label className={styles.label}>
                <div>Email</div>
                <Input {...register('email')} type="email" placeholder="vous@example.com" />
                {errors.email && <small className={styles.error}>{errors.email.message}</small>}
              </label>
              <label className={styles.label}>
                <div>Téléphone</div>
                <Input {...register('phone')} placeholder="+33 6 12 34 56 78" />
              </label>
              <label className={styles.label}>
                <div>Société</div>
                <Input {...register('company')} placeholder="Société (optionnel)" />
              </label>
              <label className={styles.label}>
                <div>Message</div>
                <Textarea {...register('message')} rows={5} placeholder="Comment pouvons-nous aider ?" />
                {errors.message && <small className={styles.error}>{errors.message.message}</small>}
              </label>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi…' : 'Envoyer'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}




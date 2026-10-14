'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { services } from '@/lib/services'

const forms = ['Indépendant / raison individuelle', 'Sàrl', 'SA', 'Pas encore créée', 'Autre']

export function ContactForm() {
  const params = useSearchParams()
  const pre = services.find((s) => s.slug === params.get('service'))
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setState('sending')
    try {
      const res = await fetch('/api/demandes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          subject: fd.get('subject'),
          message: fd.get('message'),
          website: fd.get('website'),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('ok')
    } catch {
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <div className="form-msg form-msg--ok" role="status">
        Merci, votre demande est envoyée. Nous vous recontactons rapidement pour fixer un rendez-vous.
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="two">
        <label>
          Nom et prénom
          <input name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="two">
        <label>
          Téléphone (facultatif)
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label>
          Votre entreprise
          <select name="subject" defaultValue="">
            <option value="" disabled>
              Choisir
            </option>
            {forms.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Votre demande
        <textarea
          name="message"
          rows={6}
          required
          maxLength={5000}
          defaultValue={pre ? `Je suis intéressé(e) par : ${pre.title}.\n\n` : ''}
        />
      </label>
      <label className="hp" aria-hidden="true">
        Ne pas remplir
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state === 'error' && (
        <div className="form-msg form-msg--err" role="alert">
          L’envoi n’a pas fonctionné. Vérifiez les champs, ou écrivez-nous directement par email ou WhatsApp.
        </div>
      )}
      <div>
        <button type="submit" className="btn" disabled={state === 'sending'}>
          {state === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </button>
      </div>
      <p className="muted" style={{ fontSize: '0.95rem' }}>
        Vos données servent uniquement à répondre à votre demande. Voir la{' '}
        <Link href="/politique-confidentialite">politique de confidentialité</Link>.
      </p>
    </form>
  )
}

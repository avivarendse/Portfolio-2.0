import { useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaebpzo'

type SubmissionState =
  | { status: 'idle' }
  | { status: 'sending' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }

const verifiedContactMethods = [
  {
    label: 'Email',
    symbol: '@',
    value: 'avivarendse8@gmail.com',
    href: 'mailto:avivarendse8@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    symbol: 'in',
    value: 'linkedin.com/in/aviv-arendse-bb2815255',
    href: 'https://www.linkedin.com/in/aviv-arendse-bb2815255',
    external: true,
  },
  {
    label: 'GitHub',
    symbol: 'GH',
    value: 'github.com/avivarendse',
    href: 'https://github.com/avivarendse',
    external: true,
  },
] satisfies Array<{
  label: string
  symbol: string
  value: string
  href: string
  external: boolean
}>

export function ContactPage() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle' })
  const isSubmitting = useRef(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting.current) return

    const form = event.currentTarget
    isSubmitting.current = true
    setSubmission({ status: 'sending' })

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setSubmission({
          status: 'error',
          message: `Your message could not be sent (error ${response.status}). Please try again.`,
        })
        return
      }

      form.reset()
      setSubmission({
        status: 'success',
        message: 'Your message was sent successfully. Thank you for getting in touch.',
      })
    } catch {
      setSubmission({
        status: 'error',
        message: 'Could not reach the form service. Check your connection and try again.',
      })
    } finally {
      isSubmitting.current = false
    }
  }

  return (
    <PageContainer
      eyebrow="Your move"
      title={
        <>
          <span className="heading-lead">Let&apos;s talk about </span>
          <span className="heading-accent">what&apos;s next.</span>
        </>
      }
    >
      <section className="contact-intro" aria-labelledby="contact-invitation-title">
        <div>
          <p className="contact-section-kicker">Open channel / South Africa</p>
          <h2 id="contact-invitation-title">Make the next move.</h2>
        </div>
        <p>
          I welcome enquiries about junior developer opportunities, collaboration, and other
          relevant professional conversations.
        </p>
      </section>

      <div className="contact-layout">
        <div className="contact-rail">
          <ChamferedPanel title="Contact options" className="contact-options-panel">
            <ul className="contact-method-list">
              {verifiedContactMethods.map(({ label, symbol, value, href, external }) => (
                <li key={label} className="contact-method">
                  <span className="contact-method-symbol" aria-hidden="true">
                    {symbol}
                  </span>
                  <div className="contact-method-content">
                    <h3>{label}</h3>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={
                        external ? `${label}: ${value} (opens in a new tab)` : undefined
                      }
                    >
                      {value}
                    </a>
                  </div>
                  {external ? (
                    <span className="contact-external-mark" aria-hidden="true">
                      ↗
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </ChamferedPanel>

          <section className="contact-objective" aria-labelledby="contact-objective-title">
            <p className="contact-section-kicker">Career direction</p>
            <h2 id="contact-objective-title">
              Working towards my first junior software engineering role.
            </h2>
            <Link to="/profile" className="contact-profile-link">
              View profile <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>

        <div className="contact-primary-column">
          <ChamferedPanel title="Send a message" className="contact-form-panel">
            <form
              className="contact-form"
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
            >
              <label htmlFor="contact-name">
                <span>
                  Name <span className="contact-required">(required)</span>
                </span>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>

              <label htmlFor="contact-email">
                <span>
                  Email address <span className="contact-required">(required)</span>
                </span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>

              <label htmlFor="contact-message">
                <span>
                  Message <span className="contact-required">(required)</span>
                </span>
                <textarea id="contact-message" name="message" rows={5} required />
              </label>

              {submission.status !== 'idle' ? (
                <p
                  className="contact-submit-feedback"
                  data-status={submission.status}
                  role={submission.status === 'error' ? 'alert' : 'status'}
                  aria-live={submission.status === 'error' ? 'assertive' : 'polite'}
                  aria-atomic="true"
                >
                  {submission.status === 'sending'
                    ? 'Sending your message…'
                    : submission.message}
                </p>
              ) : null}

              <PrimaryButton
                type="submit"
                className="contact-submit-button"
                disabled={submission.status === 'sending'}
              >
                {submission.status === 'sending' ? 'Sending…' : 'Send message'}
              </PrimaryButton>
            </form>
          </ChamferedPanel>

          <div className="contact-secondary-actions">
            <Link to="/projects" className="contact-profile-link">
              Explore projects <span aria-hidden="true">→</span>
            </Link>
            <a
              className="contact-profile-link"
              href={`${import.meta.env.BASE_URL}Aviv-Arendse-CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Aviv Arendse's CV as a PDF (opens in a new tab)"
            >
              View CV <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

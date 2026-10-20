import { useState, type FormEvent } from 'react'
import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'

const contactMethods = [
  // TODO: Add verified email, LinkedIn, and GitHub values and destinations before enabling links.
  { label: 'Email', symbol: '@', value: null, href: null },
  { label: 'LinkedIn', symbol: 'in', value: null, href: null },
  { label: 'GitHub', symbol: 'GH', value: null, href: null },
] satisfies Array<{
  label: string
  symbol: string
  value: string | null
  href: string | null
}>

export function ContactPage() {
  const [submissionNotice, setSubmissionNotice] = useState('')

  function handleUnavailableSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmissionNotice(
      'Your message was not sent. Contact form delivery has not been configured.',
    )
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
      <p className="contact-intro">
        I welcome enquiries about junior developer opportunities, collaboration, and other
        relevant professional conversations.
      </p>

      <div className="contact-layout">
        <ChamferedPanel title="Contact options" className="contact-options-panel">
          <ul className="contact-method-list">
            {contactMethods.map(({ label, symbol, value, href }) => (
              <li key={label} className="contact-method">
                <span className="contact-method-symbol" aria-hidden="true">
                  {symbol}
                </span>
                <div className="contact-method-content">
                  <h3>{label}</h3>
                  {value && href ? (
                    <a
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel={label === 'Email' ? undefined : 'noreferrer'}
                    >
                      {value}
                    </a>
                  ) : (
                    <p>Details not provided yet</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </ChamferedPanel>

        <div className="contact-primary-column">
          <ChamferedPanel title="Send a message" className="contact-form-panel">
            <form className="contact-form" onSubmit={handleUnavailableSubmission}>
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

              <p className="contact-form-notice" id="contact-delivery-notice">
                Message delivery is not configured. This form cannot send messages yet.
              </p>
              {submissionNotice ? (
                <p className="contact-submit-feedback" role="alert">
                  {submissionNotice}
                </p>
              ) : null}

              {/* TODO: Configure a real delivery service and destination before enabling submit. */}
              <PrimaryButton
                type="submit"
                className="contact-submit-button"
                disabled
                aria-describedby="contact-delivery-notice"
              >
                Send message
              </PrimaryButton>
            </form>
          </ChamferedPanel>

          <ChamferedPanel title="Career objective" className="contact-objective-panel">
            <p>Working towards my first junior software engineering role.</p>
          </ChamferedPanel>
        </div>
      </div>
    </PageContainer>
  )
}

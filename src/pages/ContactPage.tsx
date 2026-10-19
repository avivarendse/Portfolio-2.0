import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'

export function ContactPage() {
  return (
    <PageContainer eyebrow="Your move" title="Let’s talk about what’s next.">
      <div className="contact-layout">
        <ChamferedPanel title="Contact options" className="contact-options-panel">
          <ul className="contact-list">
            <li>Email: dev.dossier.tertor@gmail.com</li>
            <li>LinkedIn: linkedin.com/in/placeholdername</li>
            <li>GitHub: github.com/placeholdername</li>
          </ul>
        </ChamferedPanel>

        <ChamferedPanel title="Message" className="contact-form-panel">
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" defaultValue="e.g., John Doe" aria-label="Name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" defaultValue="e.g., recruiter@company.com" aria-label="Email" />
            </label>
            <label>
              <span>Message</span>
              <textarea defaultValue="e.g., Detail your inquiry..." aria-label="Message" />
            </label>
            <PrimaryButton type="submit">Send message</PrimaryButton>
          </form>
        </ChamferedPanel>
      </div>
    </PageContainer>
  )
}

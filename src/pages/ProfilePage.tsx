import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'

export function ProfilePage() {
  return (
    <PageContainer eyebrow="Player profile" title="The developer behind the career.">
      <div className="profile-grid">
        <ChamferedPanel title="Profile" className="profile-card">
          <div className="profile-identity">
            <div className="avatar" aria-label="Developer portrait placeholder" />
            <ul className="profile-details">
              <li>
                <span>Name:</span> [placeholder name]
              </li>
              <li>
                <span>Location:</span> [placeholder location]
              </li>
              <li>
                <span>Current stage:</span> Junior full-stack developer
              </li>
            </ul>
          </div>
        </ChamferedPanel>

        <ChamferedPanel title="About me" className="profile-card">
          <p>
            I am learning by building real products, refining my full-stack workflow, and
            balancing production-ready implementation with clear communication and maintainable
            design decisions.
          </p>
        </ChamferedPanel>

        <ChamferedPanel title="Engineering philosophy" className="profile-card narrow-card">
          <ul className="check-list">
            <li>Clean code</li>
            <li>Test-driven development</li>
            <li>User-centric design</li>
          </ul>
        </ChamferedPanel>

        <ChamferedPanel title="Technical toolkit" className="profile-card narrow-card">
          <ul className="tag-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </ChamferedPanel>
      </div>

      <div className="cta-row">
        <Link to="/projects">
          <PrimaryButton type="button">Browse projects</PrimaryButton>
        </Link>
        <Link to="/contact">
          <SecondaryButton type="button">Contact</SecondaryButton>
        </Link>
      </div>
    </PageContainer>
  )
}

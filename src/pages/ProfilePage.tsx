import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'

export function ProfilePage() {
  return (
    <PageContainer
      eyebrow="Player profile"
      title={
        <>
          <span className="heading-lead">The developer </span>
          <span className="heading-accent">behind the career.</span>
        </>
      }
    >
      <div className="profile-grid">
        <ChamferedPanel title="Player profile" className="profile-card profile-identity-card">
          <dl className="profile-details">
            <div>
              <dt>Name</dt>
              <dd>Aviv Arendse</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Junior full-stack developer</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>South Africa</dd>
            </div>
            <div>
              <dt>Career direction</dt>
              <dd>First junior software engineering role</dd>
            </div>
          </dl>
        </ChamferedPanel>

        <ChamferedPanel title="About me" className="profile-card profile-intro-card">
          <p>
            I am a junior full-stack developer based in South Africa, working towards my first
            junior software engineering role. I have completed a full-stack web development
            programme and have development programme and internship experience. My work includes
            personal and collaborative projects.
          </p>
        </ChamferedPanel>

        <ChamferedPanel
          title="Learning & development"
          className="profile-card profile-background-card"
        >
          <ul className="profile-background-list">
            <li>Completed a full-stack web development programme</li>
            <li>Development programme and internship experience</li>
            <li>Personal and collaborative project work</li>
          </ul>
        </ChamferedPanel>

        <ChamferedPanel title="Technical toolkit" className="profile-card profile-toolkit-card">
          <div className="profile-toolkit">
            <section aria-labelledby="profile-frontend-heading">
              <h3 id="profile-frontend-heading">Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
              </ul>
            </section>
            <section aria-labelledby="profile-backend-heading">
              <h3 id="profile-backend-heading">Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </section>
            <section aria-labelledby="profile-databases-heading">
              <h3 id="profile-databases-heading">Database</h3>
              <ul>
                <li>MySQL</li>
              </ul>
            </section>
            <section aria-labelledby="profile-languages-heading">
              <h3 id="profile-languages-heading">Language</h3>
              <ul>
                <li>Python</li>
              </ul>
            </section>
          </div>
        </ChamferedPanel>

        <ChamferedPanel title="Current development focus" className="profile-card profile-focus-card">
          <div className="profile-project-focus">
            <div>
              <h3>Handled</h3>
              <p>
                My main portfolio project: a full-stack field-service operations platform for small
                plumbing and electrical businesses. It is under development; planned workflows are
                not presented as completed features.
              </p>
            </div>
            <Link to="/projects/handled" className="profile-project-link">
              View Handled overview <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ChamferedPanel>

        <ChamferedPanel title="Career objective" className="profile-card profile-objective-card">
          <p>Working towards my first junior software engineering role.</p>
        </ChamferedPanel>
      </div>

      <div className="cta-row">
        <PrimaryButton to="/projects">Browse projects</PrimaryButton>
        <a
          className="secondary-button"
          href="/Aviv-Arendse-CV.pdf"
          download="Aviv-Arendse-CV.pdf"
          aria-label="Download Aviv Arendse's CV as a PDF"
        >
          Download CV (PDF)
        </a>
      </div>
    </PageContainer>
  )
}

import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'
import { projects } from '../data/projects'

const handledProject = projects.find((project) => project.id === 'handled')

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
      <div className="profile-composition">
        <section className="profile-identity" aria-labelledby="profile-name">
          <div className="profile-identity-meta">
            <span>Profile</span>
            <span>Career profile</span>
          </div>
          <div className="profile-identity-content">
            <img
              className="profile-portrait"
              src={`${import.meta.env.BASE_URL}image/aviv-portrait-optimized.jpg`}
              alt="Portrait of Aviv Arendse"
              width="1600"
              height="2133"
              fetchPriority="high"
            />
            <div className="profile-identity-copy">
              <h2 id="profile-name">Aviv Arendse</h2>
              <p className="profile-identity-role">Junior full-stack developer</p>
            </div>
          </div>
          <dl className="profile-details">
            <div>
              <dt>Career direction</dt>
              <dd>First junior software engineering role</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>South Africa</dd>
            </div>
          </dl>
        </section>

        <section className="profile-about" aria-labelledby="profile-about-title">
          <p className="profile-section-kicker">About me / 01</p>
          <h2 id="profile-about-title">Development background</h2>
          <p>
            I have completed a full-stack web development programme and have development
            programme and internship experience. My work includes personal and collaborative
            projects.
          </p>
        </section>

        <ChamferedPanel
          title="Technical toolkit"
          className="profile-panel profile-toolkit-card"
        >
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
              <h3 id="profile-languages-heading">Other Languages</h3>
              <ul>
                <li>Python</li>
              </ul>
            </section>
          </div>
        </ChamferedPanel>

        {handledProject ? (
          <section className="profile-focus" aria-labelledby="profile-focus-title">
            <div className="profile-focus-heading">
              <div>
                <p className="profile-section-kicker">Current development focus</p>
                <h2 id="profile-focus-title">{handledProject.name}</h2>
              </div>
              {handledProject.status ? (
                <span className="profile-project-status">{handledProject.status}</span>
              ) : null}
            </div>
            <p>{handledProject.summary}</p>
            <Link to={`/projects/${handledProject.id}`} className="profile-project-link">
              View {handledProject.name} case study <span aria-hidden="true">→</span>
            </Link>
          </section>
        ) : null}

        <section className="profile-next-step" aria-labelledby="profile-next-step-title">
          <p className="profile-section-kicker">Next step</p>
          <h2 id="profile-next-step-title">Explore the portfolio.</h2>
          <div className="profile-actions">
            <PrimaryButton to="/projects">Browse projects</PrimaryButton>
            <a
              className="secondary-button"
              href={`${import.meta.env.BASE_URL}Aviv-Arendse-CV.pdf`}
              download="Aviv-Arendse-CV.pdf"
              aria-label="Download Aviv Arendse's CV as a PDF"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

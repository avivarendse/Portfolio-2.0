import { PrimaryButton } from '../components/Buttons'
import { ChamferedPanel } from '../components/ChamferedPanel'

export function HomePage() {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <div className="home-hero">
        <h1 className="home-hero-title" id="home-title">
          <span className="heading-lead home-hero-title-part">Career Mode:</span>{' '}
          <span className="home-hero-accent home-hero-title-part">
            Junior Full-Stack Developer.
          </span>
        </h1>

        <div className="home-hero-content">
          <div className="home-objective-column">
            <ChamferedPanel title="Career objective" className="home-objective-panel">
              <p>
                Working towards my first professional software engineering opportunity.
              </p>
            </ChamferedPanel>
            <PrimaryButton to="/projects" className="home-project-cta">
              Explore my projects
            </PrimaryButton>
          </div>

          <div className="tactical-display" aria-hidden="true">
            <svg className="tactical-pitch" viewBox="0 0 720 320" role="presentation">
              <path className="tactical-frame" pathLength="1" d="M24 24h672v272H24z" />
              <path className="tactical-field" pathLength="1" d="M360 24v272M24 160h672" />
              <circle className="tactical-field" pathLength="1" cx="360" cy="160" r="76" />
              <circle className="tactical-accent" cx="360" cy="160" r="4" />
              <path className="tactical-field" pathLength="1" d="M24 92h82v136H24m672-136h-82v136h82" />
              <path className="tactical-field" pathLength="1" d="M24 126h34v68H24m672-68h-34v68h34" />
              <path className="tactical-accent-line" pathLength="1" d="M68 258h132m12 0h28m18 0h80" />
              <path className="tactical-accent-line" pathLength="1" d="M652 62h-94m-14 0h-38m-14 0h-70" />
              <path className="tactical-detail" pathLength="1" d="M68 274h218m290-228h76" />
              <circle className="tactical-detail" pathLength="1" cx="322" cy="160" r="2" />
              <circle className="tactical-detail" pathLength="1" cx="398" cy="160" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

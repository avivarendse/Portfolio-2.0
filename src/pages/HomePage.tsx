import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { PageContainer } from '../components/PageContainer'

export function HomePage() {
  return (
    <PageContainer eyebrow="Career Mode" title="Career Mode: Junior Full-Stack Developer">
      <div className="cta-row">
        <Link to="/projects">
          <PrimaryButton type="button">View projects</PrimaryButton>
        </Link>
        <Link to="/profile">
          <SecondaryButton type="button">Profile overview</SecondaryButton>
        </Link>
      </div>
    </PageContainer>
  )
}

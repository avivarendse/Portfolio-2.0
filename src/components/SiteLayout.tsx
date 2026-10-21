import { NavLink, Outlet } from 'react-router-dom'
import { RouteMetadata } from './RouteMetadata'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <RouteMetadata />
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" end className="brand-mark" aria-label="Road to the first team home">
            ROAD TO THE FIRST TEAM
          </NavLink>

          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`.trim()
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>ROAD TO THE FIRST TEAM</span>
      </footer>
    </div>
  )
}

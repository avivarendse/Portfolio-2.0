import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-mark" aria-label="Road to the first team brand">
          ROAD TO THE FIRST TEAM
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`.trim()
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
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

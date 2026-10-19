import type { ReactNode } from 'react'

interface PageContainerProps {
  eyebrow?: string
  title: string
  children: ReactNode
}

export function PageContainer({ eyebrow, title, children }: PageContainerProps) {
  return (
    <div className="page-shell">
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <header className="page-header">
        <h1>{title}</h1>
      </header>
      {children}
    </div>
  )
}

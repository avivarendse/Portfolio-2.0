import type { ReactNode } from 'react'

interface ChamferedPanelProps {
  children: ReactNode
  title?: string
  className?: string
}

export function ChamferedPanel({ children, title, className = '' }: ChamferedPanelProps) {
  return (
    <section className={`chamfered-panel ${className}`.trim()}>
      {title ? (
        <header className="panel-header">
          <h2>{title}</h2>
        </header>
      ) : null}
      <div className="panel-content">{children}</div>
    </section>
  )
}

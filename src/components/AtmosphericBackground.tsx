type AtmosphericBackgroundProps = {
  variant?: 'balanced' | 'stadium' | 'floodlights' | 'tactical' | 'tunnel' | 'quiet'
}

export function AtmosphericBackground({ variant = 'balanced' }: AtmosphericBackgroundProps) {
  return (
    <div className="site-atmosphere" data-variant={variant} aria-hidden="true">
      <span className="site-atmosphere-geometry" />
      <span className="site-atmosphere-lights" />
      <span className="site-atmosphere-hex site-atmosphere-hex--left" />
      <span className="site-atmosphere-hex site-atmosphere-hex--right" />
    </div>
  )
}

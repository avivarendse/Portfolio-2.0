import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface ButtonContentProps {
  children: ReactNode
  className?: string
}

type ButtonProps = ButtonContentProps & ButtonHTMLAttributes<HTMLButtonElement>
type ButtonLinkProps = ButtonContentProps & Omit<LinkProps, 'children' | 'className'>

export function PrimaryButton(props: ButtonProps | ButtonLinkProps) {
  const { children, className = '' } = props
  const buttonClass = `primary-button ${className}`.trim()

  if ('to' in props) {
    const { to, ...linkProps } = props

    return (
      <Link to={to} {...linkProps} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  )
}

export function SecondaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`secondary-button ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

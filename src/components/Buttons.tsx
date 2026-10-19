import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function PrimaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`primary-button ${className}`.trim()} {...props}>
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

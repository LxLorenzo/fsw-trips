import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'outlined' | 'cancel'
}

function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primaryDarker',
    cancel:
      'bg-transparent border border-cancelRed text-cancelRed hover:bg-cancelRed hover:text-white',
    outlined:
      'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
  }

  const _className = twMerge(
    variantClasses[variant],
    'appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all',
    className,
  )

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  )
}

export default Button

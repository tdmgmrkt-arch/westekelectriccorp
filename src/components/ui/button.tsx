import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-electric-500 text-white hover:bg-electric-600 focus-visible:ring-electric-500 shadow-md hover:shadow-lg',
        secondary:
          'bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-900 shadow-md hover:shadow-lg',
        outline:
          'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:ring-navy-900',
        'outline-white':
          'border-2 border-white text-white hover:bg-white hover:text-navy-900 focus-visible:ring-white',
        ghost: 'text-navy-900 hover:bg-navy-100 focus-visible:ring-navy-500',
        link: 'text-navy-900 underline-offset-4 hover:underline focus-visible:ring-navy-500',
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        default: 'h-12 px-6',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

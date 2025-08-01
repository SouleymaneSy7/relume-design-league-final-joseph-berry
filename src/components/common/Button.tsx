import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'whitespace-nowrap flex items-center justify-center capitalize transition-colors cursor-pointer rounded-full',
  {
    variants: {
      variant: {
        default:
          'bg-light-clr text-default-clr border-2 border-dark-clr hover:bg-transparent transition-colors h-14 w-[172px] py-2 lg:w-[112px] lg:h-10',
        secondary:
          'bg-dark-clr text-text-light-clr hover:bg-dark-clr/80 h-14 w-[172px] py-2',
        outline:
          'border border-light-clr bg-dark-clr text-light-clr w-[120px] h-12',
        arrow:
          'rounded-full bg-primary-clr grid place-items-center h-[96px] w-[96px]',
        arrow_ghost: 'grid place-items-center',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

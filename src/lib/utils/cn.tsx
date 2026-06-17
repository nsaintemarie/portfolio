import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-heading-xl',
        'text-heading-lg',
        'text-heading-md',
        'text-logo',
        'text-paragraph-caps',
        'text-paragraph',
        'text-paragraph-sm',
      ],
    },
  },
})

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

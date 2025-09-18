import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { cn } from '../utils/cn'

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

const buttonVariants = {
  primary: 'bg-primary-600 active:bg-primary-700',
  secondary: 'bg-secondary-600 active:bg-secondary-700',
  outline: 'border border-primary-600 bg-transparent active:bg-primary-50',
  ghost: 'bg-transparent active:bg-primary-50',
}

const buttonSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={cn(
        'rounded-lg items-center justify-center',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      <Text
        className={cn(
          'font-medium',
          variant === 'outline' || variant === 'ghost'
            ? 'text-primary-600'
            : 'text-white'
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

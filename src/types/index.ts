import * as React from 'react'

export type VisuallyHiddenPropsType = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'span'>

export interface TitlePropsType extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
}

export type InputsPropsType = {
  id?: string
  label?: string
  type: 'text' | 'email'
  value: string | number
  name: string
  placeholder: string
  error?: string
  disabled?: boolean
  errorClassName?: string
  labelClassName?: string
  inputWrapperClassName?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.ComponentPropsWithoutRef<'input'>

export type FormPropsType = React.ComponentPropsWithoutRef<'form'> & {
  children: React.ReactNode
}

export interface SkiptToContentsPropsType {
  classNames: string
}

export type ContainerPropsTypes<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

export type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
  as?: As
}

export type CardPropsType<T extends React.ElementType> = {
  children: React.ReactNode
  classNames?: string
} & React.ComponentPropsWithoutRef<T>

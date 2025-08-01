import * as React from 'react'
import clsx from 'clsx'

import Container from './Container'
import { CardPropsType } from '@/types'

function Card<C extends React.ElementType>({
  children,
  classNames,
  ...delegatedProps
}: CardPropsType<C>) {
  return (
    <Container
      as={'article'}
      className={clsx(classNames)}
      {...delegatedProps}
      aria-labelledby="card-title"
    >
      {children}
    </Container>
  )
}

export default Card

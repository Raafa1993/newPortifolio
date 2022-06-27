import React from 'react'

import { Container } from './styles';

export default function ButtonLink({ children, isActive, ...rest }: any) {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      {children}
    </Container>
  )
}

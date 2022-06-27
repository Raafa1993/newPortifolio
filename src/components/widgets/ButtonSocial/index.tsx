import React from 'react'

import { Container } from './styles';

export default function ButtonSocial({ link, icon: Icon }: any) {
  return (
    <Container href={`http://${link}`} target="_blank">
      {Icon}
    </Container>
  )
}

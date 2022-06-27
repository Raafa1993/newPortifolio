import React from 'react'

import { Container, Title, SubTitle } from './styles';

interface PropsTitle {
  title: string;
  subTitle: string;
}

export default function SectionTitle({ title, subTitle }: PropsTitle) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

import React from 'react'
import UserIcon from '../../icons/UserIcon';

import { Container, SectionInfo } from './styles';

type PropsExpUi = {
  title: string;
  subTitle: string;
  icon: any;
}

export default function ExpUi({ icon: Icon, subTitle, title }: PropsExpUi) {
  return (
    <Container>

      {Icon}
      {/* <UserIcon /> */}

      <SectionInfo>
        <h1 className='titleExperienceUi'>{title}</h1>
        <span className='subTitleExperienceUi'>{subTitle}</span>
      </SectionInfo>
    </Container>
  )
}

import Image from 'next/image';
import React from 'react'
import ExperienceUi from '../../widgets/ExperienceUi';
import Button from '../../forms/buttons/Button'

import Main from "../../images/main.png";
import UserIcon from '../../icons/UserIcon';

import { 
  Container,
  SectionContent,
  ContentImageAbout,
  SectionInfoAbout,
  SectionExperience,
  DescriptionAbout,
} from './styles';
import SectionTitle from '../../widgets/SectionTitle';

export default function About() {
  return (
    <Container id='About'>

    <SectionTitle
      title='About me'
      subTitle='Sobre mim'
    />

    <SectionContent>
      <ContentImageAbout>
        <Image
          width={300}
          height={320}
          src={Main}
          alt={"foto perfil"}
          objectFit="contain"
        />
      </ContentImageAbout>

      <SectionInfoAbout>
        <SectionExperience>
          <ExperienceUi
            title='Experiência'
            subTitle='1 ano trabalhado'
            icon={<UserIcon />}
          />
          <ExperienceUi
            title='Experiência'
            subTitle='1 ano trabalhado'
            icon={<UserIcon />}
          />
          <ExperienceUi
            title='Experiência'
            subTitle='1 ano trabalhado'
            icon={<UserIcon />}
          />
        </SectionExperience>

        <DescriptionAbout>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suscipit amet amet, eleifend porttitor est at tristique enim. 
          Dui urna pellentesque feugiat in enim integer. Quam tristique 
          arcu in quis viverra consequat arcu volutpat.
        </DescriptionAbout>

        <Button typeButton="default">contate-me</Button>

      </SectionInfoAbout>
    </SectionContent>
    </Container>
  )
}

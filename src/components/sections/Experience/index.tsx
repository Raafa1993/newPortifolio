import React from 'react'
import { Skills } from '../../Data/Skills';
import CheckIcon from '../../icons/checkIcon';
import SectionTitle from '../../widgets/SectionTitle';

import { 
  Container,
  Content,
  SectionSkills,
  SectionExperience,
  CardSkills,
  CardItem,
  SkillItem,
} from './styles';

export default function Experience() {
  return (
    <Container id='Experience'>
      <SectionTitle
        title='Skills'
        subTitle='Habilidades'
      />

      <Content>
        <SectionSkills>


          <CardSkills>
            <h2>Frontend Developer</h2>
            <CardItem>
              {Skills.map((row) => (
                <SkillItem key={row.id}>
                  {row.icon}
                  <div className="infoItem">
                    <h3>{row.skill}</h3>
                    <span>{row.level}</span>
                  </div>
                </SkillItem>

              ))}
            </CardItem>
          </CardSkills>
        </SectionSkills>

        <SectionExperience>

        </SectionExperience>
      </Content>


    </Container>
  )
}

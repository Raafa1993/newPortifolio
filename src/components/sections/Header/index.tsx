import React from 'react';
import { motion } from "framer-motion"
import Button from '../../forms/buttons/Button';

import Image from 'next/image';


//Images
import ImagePerfil from '../../images/imagePerfil-1.png';

import { 
  Container, 
  Contents, 
  ContentLeft, 
  Title, 
  Subtitle, 
  Description, 
  ContentRight, 
  FieldGroup,
  SectionImage,
  SectionWidgeBottom,
  SectionWidgeLeft,
  SectionWidgeRight,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Contents>
        <ContentLeft>
          <Title>
            Olá sou Rafael
          </Title>
          <Subtitle>
            Frontend developer
          </Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero magna odio ac adipiscing.
          </Description>

          <FieldGroup>
            <Button
              typeButton='linear'
            >
              Downdoad cv
            </Button>
            <Button
              typeButton='default'
            >
              contate-me
            </Button>
          </FieldGroup>

        </ContentLeft>
        <ContentRight>
          <SectionImage>
            <Image 
              width={440}
              height={600}
              src={ImagePerfil}
              alt={"foto perfil"}
              objectFit='cover'
            />
            <SectionWidgeBottom>
              <div className='widgetOne' />
            </SectionWidgeBottom>

            <SectionWidgeLeft>
              <motion.div 
                animate={{
                  scale: [1, 1.4, 1.4, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className='widgetTwo'
              />
            </SectionWidgeLeft>

            <SectionWidgeRight>
              <div 
                className='widgetThere'
              />
            </SectionWidgeRight>
          </SectionImage>
        </ContentRight>
      </Contents>
    </Container>
  )
}

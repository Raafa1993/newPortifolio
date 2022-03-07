import React from 'react'
import Button from '../../forms/buttons/Button'

import { Container, Contents, ContentLeft, Title, Subtitle, Description, ContentRight, FieldGroup} from './styles';

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
          <h1>Right</h1>
        </ContentRight>
      </Contents>
    </Container>
  )
}

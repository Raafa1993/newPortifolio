import React, { ButtonHTMLAttributes } from 'react'
import { LoadingIcon } from '../../../icons/LoadingIcon';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  typeButton: "linear" | "default" | "degrade";
}

export default function Buton({
  isLoading,
  typeButton,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      typeButton={typeButton}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading ? <LoadingIcon /> : children}
    </Container>
  )
}

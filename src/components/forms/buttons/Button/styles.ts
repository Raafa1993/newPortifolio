import styled, { css } from "styled-components";

interface PropsButton {
  isLoading?: boolean;
  typeButton: string;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  background: transparent;
  height: 50px;
  padding: 0.75rem 1.25rem;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 26px;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.35s;

  ${props => props.typeButton === 'default' && css`
    background: var(--primary);
    color: var(--textButton);

    &:hover {
      transition: background-color 0.35s;
      background: #B0ABEC;
    }
  `}

  ${props => props.typeButton === 'degrade' && css`
    background: var(--linearTitle);
    color: var(--text);

    &:hover {
      transform: scale(1.05);
    }
  `}

  ${props => props.typeButton === 'linear' && css`
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
  `}


`;
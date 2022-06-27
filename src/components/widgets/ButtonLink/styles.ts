import styled, { css } from "styled-components";

interface Props {
  isActive?: boolean; 
}

export const Container = styled.a<Props>`
  background-color: transparent;
  padding: 0.875rem;
  border-radius: 50%;
  display: flex;
  color: #282F3D;

  :hover {
    svg {
      path {
        fill: #fff
      }
    }
  }

  ${({ isActive }) => isActive && css`
    background: linear-gradient(160.5deg, #344352 3.81%, #344352 3.82%, #17191E 86.92%);
    border: 2px solid #282F3D;
    box-shadow: 0px -6px 25px rgba(162, 156, 237, 0.35), 0px 6px 25px rgba(13, 13, 15, 0.7), inset 0px 4px 4px rgba(140, 148, 167, 0.25);
    
    svg {
      width: 26px;
      height: 26px;
    }
  `}

`;
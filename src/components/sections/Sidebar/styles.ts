import styled, { css } from "styled-components";

interface props {
  menuFixed: boolean;
}

export const Container = styled.div<props>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;

  z-index: 998;
  background: var(--background);
  -webkit-transition: 2s ease;
  transition: 2s ease;
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  border-bottom: 2px dashed transparent;

  ${props => props.menuFixed && css`
    background-color: rgba(6, 9, 15, 0.4);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    border-bottom: 2px dashed var(--content);
  `}

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    border-bottom: 2px dashed #FAFCFC;
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  .sidebarContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContentLeft = styled.div`
    display: grid;
    place-items: center;

    padding: 20px;

    h1 {
      font-size: 2rem;
      color: var(--text);
    }
`;

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;

    .buttonIcon {
      display: grid;
      place-items: center;

      width: 28px;
      height: 28px;
      padding: 2px;
      border: none;
      background: transparent;
    }

    h1 {
      font-size: 1rem;
      color: var(--text);
    }
`;

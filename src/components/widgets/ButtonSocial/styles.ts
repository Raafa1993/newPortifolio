import styled from "styled-components";

export const Container = styled.a`
  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;
  background-color: var(--content);
  border-radius: 4px;
  transition: background-color 0.3s;

  :hover {
    transition: background-color 0.3s;
    background-color: var(--background);
  }
`;
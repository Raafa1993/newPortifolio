import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  place-items: center;

  height: 680px;
  margin-top: 120px;
  padding: 32px;
  background: var(--content);
  /* opacity: 0.4; */
  box-shadow: 0px 5px 40px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);

  border-radius: 14px;

`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  width: 100%;
  height: 100%;

  /* background: lightpink; */
`;

export const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: bold;
  text-align: left;

  background: var(--linearTitle);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: left;

  background: var(--linearTitle);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 12px;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 32px;
  color: var(--subtitle);
  margin-top: 22px;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: lightsalmon;
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

`;
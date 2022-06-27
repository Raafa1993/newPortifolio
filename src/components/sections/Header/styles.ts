import styled, { keyframes } from "styled-components";

const moveWheel = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }

  100% {
    opacity: 1;
    transform: translateY(1rem);
  }
`

export const Container = styled.header`
  display: grid;
  place-items: center;
  margin-top: 120px;
  background: var(--content);
  box-shadow: 0px 5px 40px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 14px;
  padding: 2rem 0.75rem;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

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
`;

export const SectionImage = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  position: relative;
`;

export const SectionWidgeBottom = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-170%, 180%);

  transition: all 0.35s;

  .widgetOne {
    display: grid;
    place-items: center;
    width: 158px;
    height: 90px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 5px 40px -1px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  
  @media (max-width: 1080px) {
    transform: translate(-140%,140%);
  }

  @media (max-width: 880px) {
    /* transform: translate(-140%,120%); */

    .widgetOne {
      width: 132px;
      height: 80px;
    }
  }
`;

export const SectionWidgeLeft = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-260%, -190%);
  
  transition: all 0.35s;

  .widgetTwo {
    display: grid;
    place-items: center;
    width: 90px;
    height: 90px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 5px 40px -1px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  
  @media (max-width: 1080px) {
    transform: translate(-210%, -190%);
  }

  @media (max-width: 880px) {
    transform: translate(-230%, -190%);
    .widgetTwo {
      width: 75px;
      height: 75px;
    }
  }
`;

export const SectionWidgeRight = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(80%, 120%);

  transition: all 0.35s;

  .widgetThere {
    display: grid;
    place-items: center;
    width: 140px;
    height: 40px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 5px 40px -1px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 1080px) {
    transform: translate(40%, 0%);
  }

  @media (max-width: 880px) {
    transform: translate(20%, 0%);
    
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export const ContentSubLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  margin-top: 340px;


`;

export const ContentSubRight = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 6rem;
`;

export const Mouse = styled.span`
  width: 25px;
  height: 50px;
  border: 2px solid var(--primary);
  border-radius: 20px;
  display: flex;
`;

export const MouseWheel = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: auto;
  animation: ${moveWheel} 1s linear infinite;
`;



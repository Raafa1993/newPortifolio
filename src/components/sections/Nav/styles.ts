import styled, { keyframes } from "styled-components";

const navLinkEffect = keyframes`
  0% {
    opacity: 0;
    bottom: -4rem;
  }
  100% {
    opacity: 1;
    bottom: 1rem;
  }
`

export const Container = styled.div`
  width: max-content;
  padding: 1rem 2.25rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(128, 128, 195, 0.1);
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  gap: 1.35rem;
  animation: ${navLinkEffect} 1s ease;

  background: linear-gradient(90deg, #161D2C -61.88%, rgba(52, 59, 67, 0.2) 86.46%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`
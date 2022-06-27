import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`
export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 320px;
  margin-top: 2rem;
`;

export const ContentImageAbout = styled.div`
  display: grid;
  place-items: center;
  width: 320px;
  height: 320px;
  background-image: url("/images/backgroundMain.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 12px;
`;

export const SectionInfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const SectionExperience = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DescriptionAbout = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--subTitle);
  /* margin-top: 2rem; */
`;

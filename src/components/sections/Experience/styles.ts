import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

export const SectionSkills = styled.div`
  width: 100%;
`;

export const SectionExperience = styled.div`
  width: 400px;
  /* height: 300px; */
  background-color: lightcoral;
`;



export const CardSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  background-color: var(--content);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px;

`;

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 2px;

  .infoItem {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--text);
    }
  }
`;

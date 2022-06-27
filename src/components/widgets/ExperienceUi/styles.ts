import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--content);
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 10px;

  .titleExperienceUi {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text);
  }

  .subTitleExperienceUi {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--subTitleLight);
  }
`;
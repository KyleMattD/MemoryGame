import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(58px, 1fr));
  grid-gap: 0.5rem;
  height: 100vh;
  scroll-behaviour: smooth;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 1px) {
    flex-direction: column;
  }
`;
export const Content1 = styled.div`
  background: './assets/images/Frame 169.svg'
  padding: 0.25rem;
  width: 30%;
  height: 100%;
`;
export const Content2 = styled.div`
  background: './assets/images/Rectangle 2.svg' 
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
export const Content3 = styled(Content1)``;
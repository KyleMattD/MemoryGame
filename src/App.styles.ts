import styled from 'styled-components';
import Rectangle from './assets/images/Frame 169.svg'
import SmallRec from './assets/images/Rectangle 2.svg'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 3fr));
  grid-gap: 0.75rem;
  height: 88vh;
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
  background-image: url(${Rectangle});
  padding: 0.25rem;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Content2 = styled.div`
  background-image: url(${SmallRec});  
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
export const Content3 = styled(Content1)``;
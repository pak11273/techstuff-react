import styled from 'styled-components';

export const OwnerGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  justify-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

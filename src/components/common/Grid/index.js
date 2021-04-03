import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 100%;
  grid-gap: 5px;
  grid-template-areas:
    'header'
    'body'
    'footer';
`;

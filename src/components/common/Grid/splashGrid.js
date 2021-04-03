import styled from 'styled-components';

export const SplashGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-gap: 5px;
  grid-template-areas:
    'header'
    'body'
    'callout';
  max-width: ${props => props.maxwidth};
  margin: 0 auto;
`;

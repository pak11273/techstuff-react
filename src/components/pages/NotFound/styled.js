import styled from 'styled-components';

export const Styles = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 240px;

  h4 {
    margin-bottom: 20px;
  }

  a {
    align-self: center;
    margin: 0 auto;
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

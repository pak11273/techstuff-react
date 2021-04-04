import styled from 'styled-components';

export const Styles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 240px;

  h4 {
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    margin: 0 auto;
  }

  button {
    &:hover {
      cursor: pointer;
    }
    max-width: 100px;
    border-radius: 5px;
    text-align: center;
    margin: auto 28%;
  }
`;

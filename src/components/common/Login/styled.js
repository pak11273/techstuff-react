import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  background-color: white;
  border-radius: 20%;
  opacity: 0.7;
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  color: ${props => props.theme.colors.medBlue};
  min-width: 230px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  h1 {
    text-align: center;
    margin: 30px auto 20px;
  }

  p {
    text-align: center;
    margin-bottom: 0px;
  }

  a {
    text-align: center;
    margin-bottom: 40px;
  }

  p:nth-of-type(2) {
    margin-bottom: 20px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 200px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    text-align: center;
  }

  & input {
    margin: 2rem;
    border: 2px solid ${props => props.theme.colors.medBlue};
    border-radius: 5px;
    color: ${props => props.theme.colors.medBlue};
  }

  @media (min-width: 640px) {
    margin-right: 20px;
    max-width: 300px;
    div {
      flex-direction: row;
      label {
        text-align: right;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  margin: 1rem 1rem 3rem 1rem;
  padding: 0.8rem;
  align-self: center;
  font-size: 1.4rem;
  border: solid 5px ${props => props.theme.colors.medBlue};
  border-radius: 20%20%;
  color: ${props => props.theme.colors.medBlue};
  max-width: 120px;
  &:hover {
    background: ${props => props.theme.colors.darkBlue};
    color: white;
    cursor: pointer;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: darkRed;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 auto 20px;
`;

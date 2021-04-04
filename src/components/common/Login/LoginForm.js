import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 20%;
  opacity: 0.7;
  padding: 20px;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.medBlue};
  min-width: 230px;
  max-width: 420px;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 40px;

  h1 {
    margin: 30px auto 20px;
  }

  p {
    text-align: center;
    margin-bottom: 0px;
  }

  p:nth-of-type(2) {
    margin-bottom: 20px;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & input {
    margin: 2rem;
  }

  @media (min-width: 640px) {
    div {
      flex-direction: row;
    }
  }
`;

const ButtonStyled = styled.button`
  margin: 1rem 1rem 3rem 1rem;
  padding: 0.8rem;
  align-self: center;
  font-size: 1.4rem;
  border: solid 5px ${props => props.theme.colors.medBlue};
  border-radius: 20%20%;
  color: ${props => props.theme.colors.medBlue};
  &:hover {
    background: ${props => props.theme.colors.darkBlue};
    color: white;
    cursor: pointer;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: darkRed;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 auto 20px;
`;

const LoginForm = props => {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = evt => {
    evt.preventDefault();
    evt.persist();
    submit();
  };

  const onChange = evt => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledDiv>
      <StyledLoginForm className="loginFormContainer" onSubmit={onSubmit}>
        <h1>Login</h1>
        <p>demo account: testOwner</p>
        <p>password: test123</p>
        <Inputs>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              values={values.username}
              onChange={onChange}
            />
          </div>
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              values={values.password}
              onChange={onChange}
            />
          </div>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Inputs>

        <ButtonStyled
          className={disabled ? 'disabled' : ''}
          disabled={disabled}
        >
          Log In{' '}
        </ButtonStyled>
        <Link to="/register">Need an account?</Link>
      </StyledLoginForm>
    </StyledDiv>
  );
};

export default LoginForm;

import { ButtonStyled, ErrorMessage, Inputs, StyledLoginForm } from './styled';

import { Link } from 'react-router-dom';
import React from 'react';

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
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
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
          Log In
        </ButtonStyled>
        <Link to="/register">Need an account?</Link>
      </StyledLoginForm>
    </div>
  );
};

export default LoginForm;

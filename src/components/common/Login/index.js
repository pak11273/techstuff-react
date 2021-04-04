import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import LoginForm from './LoginForm';
import { StyledDiv } from 'components/pages/SplashPage/styled';
import { connect } from 'react-redux';
import { login } from 'actions';
import loginSchema from './LoginSchema';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};

const initialDisabled = true;

const Login = props => {
  const { message, login, user } = props;
  const history = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    if (message) {
      setFormErrors({ username: '', password: message }); // TEMPORARY ONLY!
    }
  }, [message]);

  useEffect(() => {
    if (user) {
      if (user.role === 'owner') {
        history.push('/owner-home');
      } else if (user.role === 'renter') {
        history.push('/renter-home');
      }
    }
  }, [user, history]);

  const inputChange = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    login(formValues);
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledDiv>
      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return { message: state.message, user: state.user };
};

export default connect(mapStateToProps, { login })(Login);

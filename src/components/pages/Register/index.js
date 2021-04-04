import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import RegistrationForm from './RegistrationForm';
import { StyledDiv } from 'components/pages/SplashPage/styled';
import { connect } from 'react-redux';
import { register } from 'actions';
import registrationSchema from './RegistrationSchema';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  firstname: '',
  lastname: '',
  streetAddress: '',
  city: '',
  state: '',
  zipcode: '',
  //radio button
  role: '',
};

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  firstname: '',
  lastname: '',
  streetAddress: '',
  city: '',
  state: '',
  zipcode: '',
  //dropdown
  role: '',
};

const initialDisabled = true;

const Register = props => {
  let { register } = props;
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(registrationSchema, name)
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
    // const loginSubmit = {
    //   username: formValues.username.trim(),
    //   password: formValues.password.trim(),
    //   email: formValues.email.trim(),
    //   firstname: formValues.firstname.trim(),
    //   lastname: formValues.lastname.trim(),
    //   streetAddress: formValues.streetAddress.trim(),
    //   city: formValues.city.trim(),
    //   state: formValues.state.trim(),
    //   zipcode: formValues.zipcode.trim(),
    //   role: formValues.role.trim(),
    // };
    console.log('VALUES: ', formValues);
    register(formValues, history);
  };

  useEffect(() => {
    registrationSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledDiv>
      <RegistrationForm
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
  return { user: state.user, message: state.message };
};

export default connect(mapStateToProps, { register })(Register);

import {
  ButtonStyled,
  ErrorMessage,
  Inputs,
  StyledRegistrationForm,
} from './styled';

import React from 'react';

const RegistrationForm = props => {
  const { values, submit, change, errors } = props;
  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };
  const onChange = evt => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledRegistrationForm
      className="registrationFormContainer"
      onSubmit={onSubmit}
    >
      <h2>Sign Up</h2>
      <Inputs>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            values={values.username}
            onChange={onChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            values={values.password}
            onChange={onChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            values={values.email}
            onChange={onChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>

        <div>
          <label>First name</label>
          <input
            type="text"
            name="firstname"
            values={values.firstname}
            onChange={onChange}
          />
          {errors.firstname && <ErrorMessage>{errors.firstname}</ErrorMessage>}
        </div>

        <div>
          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            values={values.lastname}
            onChange={onChange}
          />
          {errors.lastname && <ErrorMessage>{errors.lastname}</ErrorMessage>}
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="streetAddress"
            values={values.streetAddress}
            onChange={onChange}
          />
          {errors.streetAddress && (
            <ErrorMessage>{errors.streetAddress}</ErrorMessage>
          )}
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            values={values.city}
            onChange={onChange}
          />
          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
        </div>

        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            values={values.state}
            onChange={onChange}
          />
          {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
        </div>
        <div>
          <label>Zipcode</label>
          <input
            type="text"
            name="zipcode"
            values={values.zipcode}
            onChange={onChange}
          />
          {errors.zipcode && <ErrorMessage>{errors.zipcode}</ErrorMessage>}
        </div>
        <div>
          <label>Account</label>
          <select values={values.role} name="role" onChange={onChange}>
            <option value="">-- Select Type -- </option>
            <option value="renter">Renter</option>
            <option value="owner">Owner</option>
          </select>
          {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
        </div>
      </Inputs>
      <ButtonStyled>Sign Up</ButtonStyled>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;

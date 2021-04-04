import {
  ButtonStyled,
  ErrorMessage,
  Inputs,
  StyledRegistrationForm,
} from './styled';

import React from 'react';

const RegistrationForm = props => {
  const { values, submit, change, errors, disabled } = props;

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
        </div>
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            values={values.password}
            onChange={onChange}
          />
        </div>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            values={values.email}
            onChange={onChange}
          />
        </div>
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <div>
          <label>First name</label>
          <input
            type="text"
            name="firstname"
            values={values.firstname}
            onChange={onChange}
          />
        </div>
        {errors.firstname && <ErrorMessage>{errors.firstname}</ErrorMessage>}

        <div>
          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            values={values.lastname}
            onChange={onChange}
          />
        </div>
        {errors.lastname && <ErrorMessage>{errors.lastname}</ErrorMessage>}

        <div>
          <label>Address</label>
          <input
            type="text"
            name="streetAddress"
            values={values.streetAddress}
            onChange={onChange}
          />
        </div>
        {errors.streetAddress && (
          <ErrorMessage>{errors.streetAddress}</ErrorMessage>
        )}

        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            values={values.city}
            onChange={onChange}
          />
        </div>
        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}

        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            values={values.state}
            onChange={onChange}
          />
        </div>
        {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}

        <div>
          <label>Zipcode</label>
          <input
            name="zipcode"
            values={values.zipcode}
            onChange={onChange}
            type="number"
            maxLength="5"
          />
        </div>
        {errors.zipcode && <ErrorMessage>{errors.zipcode}</ErrorMessage>}

        <div>
          <label>Account</label>
          <select values={values.role} name="role" onChange={onChange}>
            <option value="">-- Select Type -- </option>
            <option value="renter">Renter</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
      </Inputs>
      <ButtonStyled className={disabled ? 'disabled' : ''} disabled={disabled}>
        Sign Up
      </ButtonStyled>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;

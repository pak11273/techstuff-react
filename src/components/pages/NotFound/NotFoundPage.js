import { Link } from 'react-router-dom';
import React from 'react';
import { StyledDiv } from '../SplashPage/styled';
import { Styles } from './styled';

const NotFoundPage = () => {
  return (
    <StyledDiv>
      <Styles>
        <h4>404 Page Not Found</h4>
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </Styles>
    </StyledDiv>
  );
};

export default NotFoundPage;

import { Link } from 'react-router-dom';
import React from 'react';
import { Styles } from './styled';

const NotFoundPage = () => {
  return (
    <Styles>
      <h4>404 Page Not Found</h4>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </Styles>
  );
};

export default NotFoundPage;

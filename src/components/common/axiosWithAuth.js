// code from student Nicholas Myers! Thank you Nicholas!

import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://jrmmba-foundation.herokuapp.com'
        : 'http://localhost:2019',
  });
};

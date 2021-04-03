import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  const token = localStorage.getItem('token');
  console.log('tokeN:: ', token);
  return (
    axios
      // .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
      .get(
        // process.env.NODE_ENV === 'production'
        //   ? 'https://web39mytechstuff.herokuapp.com/api/login'
        //   : 'http://localhost:2019/api/rentals',
        // {
        'https://web39mytechstuff.herokuapp.com/api/rentals',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(res => res.data)
      .catch(err => console.log('err: ', err))
  );
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export { sleep, getExampleData, getProfileData, getDSData };

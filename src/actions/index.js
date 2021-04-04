import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// log in and receive a token
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  // OAUTH2 -> if you are using java backend
  //   axios
  //     // .post(
  //     //   process.env.NODE_ENV === 'production'
  //     //     ? 'https://web39mytechstuff.herokuapp.com/api/login'
  //     //     : 'http://localhost:2019/api/login',
  //     //   `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
  //     .post(
  //       'https://web39mytechstuff.herokuapp.com/api/login',
  //       `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
  //       {
  //         headers: {
  //           // btoa is converting our client id/client secret into base64
  //           Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //       }
  axios
    .post('https://rent-my-tech-stuff.herokuapp.com/api/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      // props.history.push('/userinfo');
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

// log out and delete token
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return { type: LOGOUT };
};

// register a new account
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (registerInfo, history) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post('https://rent-my-tech-stuff.herokuapp.com/api/register', registerInfo)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      history.push('/login');
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE });
    });
};

// owner fetches their list of items
export const OWNER_FETCH_DATA_START = 'OWNER_FETCH_DATA_START';
export const OWNER_FETCH_DATA_SUCCESS = 'OWNER_FETCH_DATA_SUCCESS';
export const OWNER_FETCH_DATA_FAILURE = 'OWNER_FETCH_DATA_FAILURE';

export const ownerFetchData = () => dispatch => {
  const ownerId = localStorage.getItem('userId');
  dispatch({ type: OWNER_FETCH_DATA_START });
  axiosWithAuth()
    .get(`https://rent-my-tech-stuff.herokuapp.com/api/owners/${ownerId}`)
    .then(res => {
      dispatch({ type: OWNER_FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: OWNER_FETCH_DATA_FAILURE, payload: err });
    });
};

// owner selects one of their items for editing
export const OWNER_SELECT_ITEM = 'OWNER_SELECT_ITEM';

export const ownerSelectItem = id => {
  return { type: OWNER_SELECT_ITEM, payload: id };
};

// owner uses the edit form and submits to change the item
export const OWNER_CHANGE_ITEM_START = 'OWNER_CHANGE_ITEM_START';
export const OWNER_CHANGE_ITEM_SUCCESS = 'OWNER_CHANGE_ITEM_SUCCESS';
export const OWNER_CHANGE_ITEM_FAILURE = 'OWNER_CHANGE_ITEM_FAILURE';

export const ownerChangeItem = (id, item) => dispatch => {
  dispatch({ type: OWNER_CHANGE_ITEM_START });
  axiosWithAuth()
    .put(`https://rent-my-tech-stuff.herokuapp.com/api/owners/item/${id}`, item)
    .then(res => {
      dispatch({ type: OWNER_CHANGE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: OWNER_CHANGE_ITEM_FAILURE, payload: err });
    });
};

// owner selects a new item on their
export const OWNER_NEW_ITEM = 'OWNER_NEW_ITEM';

export const ownerNewItem = () => {
  return { type: OWNER_NEW_ITEM };
};

export const OWNER_ADD_ITEM_START = 'OWNER_ADD_ITEM_START';
export const OWNER_ADD_ITEM_SUCCESS = 'OWNER_ADD_ITEM_SUCCESS';
export const OWNER_ADD_ITEM_FAILURE = 'OWNER_ADD_ITEM_FAILURE';

export const ownerAddItem = item => dispatch => {
  dispatch({ type: OWNER_ADD_ITEM_START });
  axiosWithAuth()
    .post(`https://rent-my-tech-stuff.herokuapp.com/api/owners/item/`, item)
    .then(res => {
      dispatch({ type: OWNER_ADD_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: OWNER_ADD_ITEM_FAILURE, payload: err });
    });
};

export const OWNER_CANCEL = 'OWNER_CANCEL';

export const ownerCancel = () => {
  return { type: OWNER_CANCEL };
};

export const OWNER_DELETE_ITEM_START = 'OWNER_DELETE_ITEM_START';
export const OWNER_DELETE_ITEM_SUCCESS = 'OWNER_DELETE_ITEM_SUCCESS';
export const OWNER_DELETE_ITEM_FAILURE = 'OWNER_DELETE_ITEM_FAILURE';

export const ownerDeleteItem = id => dispatch => {
  dispatch({ type: OWNER_DELETE_ITEM_START });
  axiosWithAuth()
    .delete(`https://rent-my-tech-stuff.herokuapp.com/api/owners/item/${id}`)
    .then(res => {
      dispatch({ type: OWNER_DELETE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: OWNER_DELETE_ITEM_FAILURE, payload: err });
    });
};

export const RENTER_SEARCH_START = 'RENTER_SEARCH_START';
export const RENTER_SEARCH_SUCCESS = 'RENTER_SEARCH_SUCCESS';
export const RENTER_SEARCH_FAILURE = 'RENTER_SEARCH_FAILURE';

export const renterSearch = (searchTerm, location) => dispatch => {
  // const query = (searchTerm && location) ?
  //   `https://rent-my-tech-stuff.herokuapp.com/api/renters/?filter=${searchTerm}&&location=${location}`:
  //   `https://rent-my-tech-stuff.herokuapp.com/api/`;
  const query = `https://rent-my-tech-stuff.herokuapp.com/api/renters/?filter=${searchTerm}&&location=${location}`;
  dispatch({ type: RENTER_SEARCH_START, payload: query });
  axiosWithAuth()
    .get(query)
    .then(res => {
      dispatch({ type: RENTER_SEARCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: RENTER_SEARCH_FAILURE, payload: err });
    });
};

export const RENTER_SELECT = 'RENTER_SELECT';

export const renterSelect = item => {
  return { type: RENTER_SELECT, payload: item };
};

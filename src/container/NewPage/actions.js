// import constants below

/*
	Example on creating a basic get action.
	The foo is just an action type that indicates the type of action being performed.

	Actions are payloads of information that send data from your application to
	your store. They are the only source of information for the store. You send
	them to the store using store.dispatch().
	Link: https://redux.js.org/basics/actions
*/
/*
export const actionName = (foo) => {
  return ({
    type: CONSTANT_NAME,
		payload: foo,
  });
}
*/

















/*Examples:

import {
  FETCH_GIF_DATA,
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START,
  DELETE_LIKED_GIF,
  ADD_LIKED_GIF,
  CLEAR_GIF_DATA,
  ON_START_OVER,
  ON_DATA_FECTCH_NO_RESULTS
} from './constants';

export const getGifData = (searchStr, weirdness) => {
  return ({
    type: FETCH_GIF_DATA,
    searchStr,
    weirdness
  });
}

export const onGifLoadSuccess = (data) => {
  return ({
    type: ON_DATA_FECTCH_SUCESS,
    payload: data,
  });
};

export const onGifDataLoadSuccess = (data) => {
  return ({
    type: ON_DATA_FECTCH_SUCESS,
    payload: data,
  });
};

export const onGifLoadStart = () => {
  return ({
    type: ON_DATA_FECTCH_START,
  });
};

export const onGifLoadDone = () => {
  return ({
    type: ON_DATA_FECTCH_DONE,
  });
};

export const onGifLoadNoResults = () => {
  return ({
    type: ON_DATA_FECTCH_NO_RESULTS,
  });
};

export const onGifLoadFailed = () => {
  return ({
    type: ON_DATA_FECTCH_FAILED,
  });
};

export const onAddLikedGif = (id, name, url, weirdness, searchTerm) => {
  return ({
    type: ADD_LIKED_GIF,
    id,
    name,
    url,
    weirdness,
    searchTerm
  });
};
export const onDeleteLikedGif = (index) => {
  return ({
    type: DELETE_LIKED_GIF,
    index,

  });
};

export const onClearGifData = () => {
  return ({
    type: CLEAR_GIF_DATA,
  });
};

export const onStartOver = () => {
  return ({
    type: ON_START_OVER,
  });
};
*/

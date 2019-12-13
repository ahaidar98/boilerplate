// import consants
/* import {} from './constants'; */

// Intial Redux State
/*
	const initialState = {
		someState: null
	};
*/
/*
	Reducers specify how the application's state changes in response to actions
	sent to the store. Remember that actions only describe what happened, but
	don't describe how the application's state changes.
	Link: https://redux.js.org/basics/reducers
*/
/*
	export default (state = initialState, action) => {
	  switch (action.type) {
	    case CONSTANT_NAME:
	      return { ...state, someState: action.payload };

	    default:
	      return state;
	  }
	};
*/











/* Example:
import {
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START,
  DELETE_LIKED_GIF,
  ADD_LIKED_GIF,
  CLEAR_GIF_DATA,
  ON_START_OVER,
  ON_DATA_FECTCH_NO_RESULTS,
} from './constants';

const initialState = {
	gifData: {},
	gifStatus: 'No Results',
  likedGifs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_DATA_FECTCH_SUCESS:
      return { ...state, gifData: action.payload };

    case ON_DATA_FECTCH_START:
      return { ...state, gifStatus: 'Loading' };

    case ON_DATA_FECTCH_DONE:
      return { ...state, gifStatus: 'Done' };

    case ON_DATA_FECTCH_NO_RESULTS:
      return { ...state, gifStatus: 'No Results' };

    case ON_DATA_FECTCH_FAILED:
      return { ...state, gifStatus: 'Failed' };

    case ADD_LIKED_GIF:
      const obj = Object.assign({}, state.likedGifs, { id: action.id, url: action.url, name: action.name, weirdness: action.weirdness, searchTerm: action.searchTerm });
      return { ...state, likedGifs: [...state.likedGifs, obj] };

    case DELETE_LIKED_GIF:
      return  { ...state, likedGifs: state.likedGifs.filter((item, index) => index !== action.index)};

    case CLEAR_GIF_DATA:
      return  { ...state, gifData: {} };

    case ON_START_OVER:
      return initialState;

    default:
      return state;
  }
};
*/

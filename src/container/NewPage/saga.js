import { takeLatest, put } from 'redux-saga/effects';

import { } from './constants';
import { } from './actions';


  function* getNewPageFunc(action) {
    const API_KEY = '';
		const requestURL = '';

	  try {
      // put on funcStart() in put()
	    yield put();

	    const response = yield fetch(requestURL);
			const jsonData = yield response.json();

      // if successfull and no need for ifs put onfuncLoadSuccess(jsonData) in put()
      yield put();
      // put on funcdone() in put()
      yield put();

	  } catch (e) {
      console.log('Error Occured', e);
      // put on funcFailed() in put()
	    yield put();
	  }
	}

	export function* NewPageSaga() {

	}

	export default NewPageSaga;








  /*Example:
  import { takeLatest, put } from 'redux-saga/effects';

  import { FETCH_GIF_DATA } from './constants';
  import {
    onGifDataLoadSuccess,
    onGifLoadStart,
    onGifLoadDone,
    onGifLoadFailed,
    onGifLoadNoResults
  } from './actions';


    function* getGifs(action) {
      const API_KEY ='278XwgF7eryJH8XEleCyi5gFgM5cFnaL';
      const SEARCH_PARAM = action.searchStr;
      const WEIRD_PARAM = action.weirdness;
  		const requestURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${SEARCH_PARAM}&weirdness=${WEIRD_PARAM}`;

  	  try {
  	    yield put(onGifLoadStart());

  	    const response = yield fetch(requestURL);
  			const jsonData = yield response.json();
        if(jsonData.data.length === 0) {
          yield put(onGifLoadNoResults());
        } else {
          yield put(onGifDataLoadSuccess(jsonData));
          yield put(onGifLoadDone());
        }

  	  } catch (e) {
        console.log('Error Occured', e);
  	    yield put(onGifLoadFailed());
  	  }
  	}

  	export function* WeirdnessCalculatorSaga() {
  	  yield takeLatest(FETCH_GIF_DATA, getGifs);
  	}

  	export default WeirdnessCalculatorSaga;
  */

import { fork, all } from 'redux-saga/effects';
//import file here & file name should be the same as export default file name in that saga file

// ex in yeild: fork(filename imported)
function* rootSaga() {
  yield all([

  ]);
}

export default rootSaga;

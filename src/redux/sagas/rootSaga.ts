import {all} from 'redux-saga/effects';

import cardSaga from './Cards';

export default function* rootSaga(): Generator {
  yield all([cardSaga()]);
}

import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {IGetCardsRequest} from '~/data/models';
import {getCardsActions} from '~/redux/actions';
import {callGetCards} from '~/data/factories';

function* getCards(params: ReturnType<typeof getCardsActions.request>) {
  try {
    const resp: IGetCardsRequest = yield callGetCards();
    yield delay(1000);
    yield put(
      resp.status === 'Success'
        ? getCardsActions.success(resp.data)
        : getCardsActions.failure(`${resp?.message}`)
    );
  } catch (error) {
    yield put(getCardsActions.failure(`${error}`));
  }
}

function* watchRoomRequests() {
  yield takeLatest(getCardsActions.request, getCards);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}

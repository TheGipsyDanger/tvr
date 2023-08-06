import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {IGetCardsRequest, ICreateCardRequest} from '~/data/models';
import {getCardsActions, createCardActions} from '~/redux/actions';
import {callGetCards, callCreateCard} from '~/data/factories';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils';

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

function* createCard({payload}: ReturnType<typeof createCardActions.request>) {
  try {
    const resp: ICreateCardRequest = yield callCreateCard(payload);

    if (resp.status === 'Success') {
      yield put(createCardActions.success(resp.data));
      navigate(AppRoutes.Main);
    } else {
      yield put(createCardActions.failure(`${resp?.message}`));
    }
  } catch (error) {
    yield put(createCardActions.failure(`${error}`));
  }
}

function* watchRoomRequests() {
  yield takeLatest(getCardsActions.request, getCards);
  yield takeLatest(createCardActions.request, createCard);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}

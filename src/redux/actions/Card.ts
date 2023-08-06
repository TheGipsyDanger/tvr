import {ICard} from '~/utils';
import {IGetCards, ICreateCard} from '~/data/dataInterfaces';
import {createAsyncAction} from 'typesafe-actions';

export const getCardsActions = createAsyncAction(
  'Cards/cardsRequest',
  'Cards/cardsRequestSuccess',
  'Cards/cardsRequestFailure'
)<IGetCards.Params, ICard[], string>();

export const createCardActions = createAsyncAction(
  'Cards/createCardRequest',
  'Cards/createCardRequestSuccess',
  'Cards/createCardRequestFailure'
)<ICreateCard.Params, ICard, string>();

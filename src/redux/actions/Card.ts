import {ICard} from '~/utils';
import {IGetCards, ICreateCard} from '~/data/dataInterfaces';
import {createAsyncAction, createCustomAction} from 'typesafe-actions';

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

export const selectedCard = createCustomAction(
  'Cards/selectedCard',
  (card: ICard) => ({
    payload: card,
  })
);

import {ICard} from '~/utils';
import {IGetCards} from '~/data/dataInterfaces';
import {createAsyncAction} from 'typesafe-actions';

export const getCardsActions = createAsyncAction(
  'Cards/cardsRequest',
  'Cards/cardsRequestSuccess',
  'Cards/cardsRequestFailure'
)<IGetCards.Params, ICard[], string>();

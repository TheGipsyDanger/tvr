import {ICard} from '~/utils';
import {createSlice} from '@reduxjs/toolkit';

interface ICardsState {
  cards: ICard[];
  card: ICard;
  isLoading: boolean;
  error: string;
}

const initialState: ICardsState = {
  cards: [] as ICard[],
  card: {} as ICard,
  isLoading: false,
  error: '',
};

const Cards = createSlice({
  name: 'Cards',
  initialState,
  reducers: {
    cardsRequest: () => {
      return {
        ...initialState,
        isLoading: true,
      };
    },
    cardsRequestSuccess: (_, {payload}) => {
      return {...initialState, cards: payload};
    },
    cardsRequestFailure: (_, {payload}) => {
      return {...initialState, error: payload};
    },
    createCardRequest: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    createCardRequestSuccess: (state, {payload}) => {
      console.log(state.cards);
      return {...initialState, card: payload, cards: [...state.cards, payload]};
    },
    createCardRequestFailure: (_, {payload}) => {
      return {...initialState, error: payload};
    },
  },
});

export default Cards.reducer;

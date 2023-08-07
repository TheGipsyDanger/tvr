import {ListRenderItemInfo} from 'react-native';
export interface ICard {
  id: string;
  cardNumber: string;
  cvv: string;
  name: string;
  validity: string;
}

export type ICardListItem = ListRenderItemInfo<ICard>;

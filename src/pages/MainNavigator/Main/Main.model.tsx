import * as React from 'react';
import {useCallback} from 'react';
import {Card, Div} from '~/components';
import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack, navigate} from '~/utils/navigator';
import {useAppSelector, ICardListItem, ICard, useAppDispatch} from '~/utils';
import {selectedCard} from '~/redux/actions';

export const useMain = (props: IMain.IModelProps): IMain.IModel => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.Cards.cards);

  const goToAddCardForm = () => {
    navigate(AppRoutes.CreateCard);
  };

  const pressCard = (card: ICard) => {
    dispatch(selectedCard(card));
    navigate(AppRoutes.SelectedCard);
  };

  const renderItem = useCallback(
    ({item}: ICardListItem) => (
      <Div onPress={() => pressCard(item)}>
        <Card type="Green Card" {...item} />
      </Div>
    ),
    []
  );

  const keyExtractor = useCallback((item: ICard) => `${item.id}`, []);

  return {
    cards,
    goBack,
    renderItem,
    keyExtractor,
    goToAddCardForm,
  };
};

import * as React from 'react';
import {useCallback} from 'react';
import {Card} from '~/components';
import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack} from '~/utils/navigator';
import {useAppSelector, ICardListItem, ICard} from '~/utils';

export const useMain = ({navigation}: IMain.IModelProps): IMain.IModel => {
  const cards = useAppSelector(state => state.Cards.cards);

  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  const renderItem = useCallback(
    ({item}: ICardListItem) => <Card type="Green Card" {...item} />,
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

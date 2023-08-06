import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '~/utils';
import {getCardsActions} from '~/redux/actions';
import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';
import {AppRoutes} from '~/routes/routeConfig';

export const useInitial = ({
  navigation,
}: IInitial.IModelProps): IInitial.IModel => {
  const {cards, isLoading} = useAppSelector(state => state.Cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCardsActions.request({}));
  }, []);

  const goToMyCards = () => {
    navigation.navigate(AppRoutes.Main);
  };

  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  return {
    cards,
    isLoading,
    goToMyCards,
    goToAddCardForm,
  };
};

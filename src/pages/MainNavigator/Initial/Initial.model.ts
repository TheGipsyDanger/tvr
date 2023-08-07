import {useEffect} from 'react';
import {useAppDispatch, useAppSelector, navigate} from '~/utils';
import {getCardsActions} from '~/redux/actions';
import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';
import {AppRoutes} from '~/routes/routeConfig';

export const useInitial = (props: IInitial.IModelProps): IInitial.IModel => {
  const {isLoading} = useAppSelector(state => state.Cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCardsActions.request({}));
  }, []);

  const goToMyCards = () => {
    navigate(AppRoutes.Main);
  };

  const goToAddCardForm = () => {
    navigate(AppRoutes.CreateCard);
  };

  return {
    isLoading,
    goToMyCards,
    goToAddCardForm,
  };
};

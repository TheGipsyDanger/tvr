import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';
import {AppRoutes} from '~/routes/routeConfig';

export const useInitial = ({
  navigation,
}: IInitial.IModelProps): IInitial.IModel => {
  const goToMyCards = () => {
    navigation.navigate(AppRoutes.Main);
  };

  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  return {
    goToMyCards,
    goToAddCardForm,
  };
};

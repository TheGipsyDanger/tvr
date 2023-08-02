import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';

export const useMain = ({navigation}: IMain.IModelProps): IMain.IModel => {
  const goToMyCards = () => {
    navigation.navigate(AppRoutes.Initial);
  };

  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  return {
    goToMyCards,
    goToAddCardForm,
  };
};

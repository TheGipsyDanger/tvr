import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack} from '~/utils/navigator';

export const useMain = ({navigation}: IMain.IModelProps): IMain.IModel => {
  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  return {
    goBack,
    goToAddCardForm,
  };
};

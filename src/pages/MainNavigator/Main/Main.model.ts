import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack} from '~/utils/navigator';
import {useAppSelector} from '~/utils';

export const useMain = ({navigation}: IMain.IModelProps): IMain.IModel => {
  const cards = useAppSelector(state => state.Cards.cards);

  const goToAddCardForm = () => {
    navigation.navigate(AppRoutes.CreateCard);
  };

  return {
    cards,
    goBack,
    goToAddCardForm,
  };
};

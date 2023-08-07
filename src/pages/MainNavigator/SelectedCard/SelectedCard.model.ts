import {ISelectedCard} from '~/pages/MainNavigator/SelectedCard/SelectedCard.types';
import {goBack, navigate} from '~/utils/navigator';
import {AppRoutes} from '~/routes/routeConfig';
import {useAppSelector} from '~/utils';

export const useSelectedCard = (
  props: ISelectedCard.IModelProps
): ISelectedCard.IModel => {
  const card = useAppSelector(state => state.Cards.card);

  const goToAddCardForm = () => {
    navigate(AppRoutes.CreateCard);
  };
  return {
    card,
    goBack,
    goToAddCardForm,
  };
};

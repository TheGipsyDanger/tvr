import {ICreateCardFinish} from '~/pages/MainNavigator/CreateCardFinish/CreateCardFinish.types';
import {useAppSelector, navigate, reset} from '~/utils';
import {AppRoutes} from '~/routes/routeConfig';

export const useCreateCardFinish = (
  props: ICreateCardFinish.IModelProps
): ICreateCardFinish.IModel => {
  const card = useAppSelector(state => state.Cards.card);
  const goToMain = () => navigate(AppRoutes.Main);
  const goToInitial = () => reset(AppRoutes.Initial);

  return {
    card,
    goToMain,
    goToInitial,
  };
};

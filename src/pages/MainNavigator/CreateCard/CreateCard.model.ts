import {ICreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.types';
import {goBack} from '~/utils/navigator';

export const useCreateCard = (
  props: ICreateCard.IModelProps
): ICreateCard.IModel => {
  return {
    goBack,
  };
};

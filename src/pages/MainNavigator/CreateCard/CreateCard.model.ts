import {useForm} from 'react-hook-form';
import {ICreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {IAddForm, goBack, addCardFormSchema, useAppDispatch} from '~/utils';
import {createCardActions} from '~/redux/actions';

export const useCreateCard = (): ICreateCard.IModel => {
  const dispatch = useAppDispatch();
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(addCardFormSchema),
  });

  const onSubmit = (params: IAddForm<string>) => {
    dispatch(createCardActions.request(params));
  };

  return {
    goBack,
    control,
    onSubmit,
    handleSubmit,
    errors,
    trigger,
    isValid,
  };
};

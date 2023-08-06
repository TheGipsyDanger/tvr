import {useForm} from 'react-hook-form';
import {ICreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {IAddForm, goBack, addCardFormSchema} from '~/utils';

export const useCreateCard = (): ICreateCard.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(addCardFormSchema),
  });

  const onSubmit = (params: IAddForm<string>) => {
    console.log(`🚀 ~ onSubmit ~ params:`, params);
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

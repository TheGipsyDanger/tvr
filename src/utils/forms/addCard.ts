import {form} from '~/translate/form';
import {IAddForm, ISchema} from '~/utils/interfaces';
import * as yup from 'yup';

const exec = (): ISchema<IAddForm<string>, IAddForm<any>> => {
  return yup.object().shape({
    cardNumber: yup.string().required(form.errors.shared.required),
    name: yup.string().required(form.errors.shared.required),
    validity: yup.string().required(form.errors.shared.required),
    cvv: yup.string().required(form.errors.shared.required),
  });
};

export const addCardFormSchema = exec();

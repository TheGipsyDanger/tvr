import {form} from '~/translate/form';
import {IAddForm, ISchema} from '~/utils/interfaces';
import {useMask} from '~/utils/function';
import * as yup from 'yup';

const exec = (): ISchema<IAddForm<string>, IAddForm<any>> => {
  return yup.object().shape({
    cardNumber: yup
      .string()
      .required(form.errors.shared.required)
      .min(16, form.errors.addCard.cardNumber.min),
    name: yup
      .string()
      .required(form.errors.shared.required)
      .matches(/^[aA-zZ\s]+$/, form.errors.addCard.name),
    validity: yup
      .string()
      .required(form.errors.shared.required)
      .test(
        'cardValidity-format',
        form.errors.addCard.validity.min,
        function (cardValidity) {
          const cardValidityCheck: string = String(cardValidity);
          return cardValidityCheck.length == 4;
        }
      )
      .test(
        'cardValidity-format',
        form.errors.addCard.validity.month,
        function (cardValidity) {
          const cardValidityCheck: string = useMask(
            String(cardValidity),
            '99/99'
          );
          const divideDate: string[] = cardValidityCheck.split('/');
          return Number(divideDate[0]) <= 12;
        }
      )
      .test(
        'cardValidity-format',
        form.errors.addCard.validity.year,
        function (cardValidity) {
          const cardValidityCheck: string = useMask(
            String(cardValidity),
            '99/99'
          );
          const now = new Date();
          const divideDate: string[] = cardValidityCheck.split('/');
          const divideYear: string[] = String(now.getFullYear()).split('');
          const yearCheck: string = `${divideYear[2]}${divideYear[3]}`;
          return Number(divideDate[1]) >= Number(yearCheck);
        }
      ),
    cvv: yup
      .string()
      .required(form.errors.shared.required)
      .min(3, form.errors.addCard.cvv.min),
  });
};

export const addCardFormSchema = exec();

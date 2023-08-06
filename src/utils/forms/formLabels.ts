import {IMasks, IMaskObj} from '~/utils/interfaces';

export const defineLabel = (label: IMasks) => {
  const options: IMaskObj = {
    cardNumber: 'numéro do cartão',
    validity: 'vencimento',
    cvv: 'código de seguraça',
    name: 'nome do títular do cartão',
  };
  return options[label] || '';
};

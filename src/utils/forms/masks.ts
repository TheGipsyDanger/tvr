import {IMasks, IMaskObj} from '~/utils/interfaces';

export const defineMask = (mask: IMasks) => {
  const options: IMaskObj = {
    cardNumber: '9999 9999 9999 9999',
    validity: '99/99',
    cvv: '999',
    name: '',
  };
  return options[mask] || '';
};

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {pages} from '~/translate/pages';
import {buttons} from '~/translate/buttons';
import {titles} from '~/translate/title';
import {headers} from '~/translate/header';
import {form} from '~/translate/form';

i18n.use(initReactI18next).init(
  {
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    resources: {
      'pt-BR': {
        translation: {
          pages,
          components: {
            Button: buttons,
            Title: titles,
            Header: headers,
          },
          form,
        },
      },
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    i18n.t('');
  }
);

export default i18n;

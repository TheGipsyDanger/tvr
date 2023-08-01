import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {pages} from '~/translate/pages';
import {buttons} from '~/translate/buttons';
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

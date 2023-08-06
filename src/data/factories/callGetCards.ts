import {AxiosHttpClient} from '~/utils/api';
import {GetCards} from '~/data/useCases';

export const callGetCards = () => new GetCards(AxiosHttpClient).send();

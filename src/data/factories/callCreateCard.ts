import {AxiosHttpClient} from '~/utils/api';
import {CreateCard} from '~/data/useCases';
import {ICreateCard} from '~/data/dataInterfaces';

export const callCreateCard = (params: ICreateCard.Params) =>
  new CreateCard(AxiosHttpClient).send(params);

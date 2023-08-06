import {
  HttpClient,
  HttpStatusCode,
  API_URL,
  useMask,
  defineMask,
} from '~/utils';
import {ICreateCard} from '~/data/dataInterfaces';
import {ICreateCardRequest} from '~/data/models';
import uuid from 'react-native-uuid';

export class CreateCard implements ICreateCard {
  constructor(private readonly httpClient: HttpClient<ICreateCardRequest>) {}

  async send({
    cardNumber,
    cvv,
    validity,
    name,
  }: ICreateCard.Params): Promise<ICreateCard.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/cards`,
      method: 'post',
      body: {
        id: uuid.v4(),
        name,
        cvv,
        cardNumber: useMask(cardNumber, defineMask('cardNumber')),
        validity: useMask(validity, defineMask('validity')),
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.success:
        return {
          status: 'Success',
          message: '',
          data: httpResponse?.data,
        };
      default:
        throw Error();
    }
  }
}

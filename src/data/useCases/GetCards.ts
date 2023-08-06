import {HttpClient, HttpStatusCode, API_URL} from '~/utils';
import {IGetCards} from '~/data/dataInterfaces';
import {IGetCardsRequest} from '~/data/models';

export class GetCards implements IGetCards {
  constructor(private readonly httpClient: HttpClient<IGetCardsRequest>) {}

  async send(): Promise<IGetCards.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL}/cards`,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
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

import {withChildren} from '~/utils';

export namespace IAppBackground {
  export interface IView extends withChildren {
    hasBg?: boolean;
  }
  export interface IModelProps {}
  export interface IModel {}
}

import {withChildren} from '~/utils';

export namespace IAppBackground {
  export interface IView extends withChildren {
    hasBg?: boolean;
    statusBarType?: 'light-content' | 'dark-content';
  }
  export interface IModelProps {}
  export interface IModel {}
}

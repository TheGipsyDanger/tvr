import {withChildren} from '~/utils';

export namespace IAppBackground {
  export interface IView extends withChildren {
    onLayoutRootView: () => Promise<void>;
  }
  export interface IModelProps {}
  export interface IModel {}
}

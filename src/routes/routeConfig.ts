import {NavigationProp, RouteProp} from '@react-navigation/native';

export enum AppRoutes {
  Main = 'Main',
  CreateCard = 'CreateCard',
  Initial = 'MainNavigator',
  CreateCardFinish = 'CreateCardFinish',
  SelectedCard = 'SelectedCard',
}

export type RootParamList = {
  [AppRoutes.Main]: undefined;
  [AppRoutes.CreateCard]: undefined;
  [AppRoutes.Initial]: undefined;
  [AppRoutes.CreateCardFinish]: undefined;
  [AppRoutes.SelectedCard]: undefined;
};

export const AppRouteNames = Object.keys(
  AppRoutes
) as unknown as keyof typeof AppRoutes as keyof RootParamList;

export type IAppRouteNames = typeof AppRouteNames;

export type INavigate = NavigationProp<IAppRouteNames>;
export type IRoute = RouteProp<IAppRouteNames>;

import {NavigationProp, RouteProp} from '@react-navigation/native';

export enum AppRoutes {
  Main = 'MainNavigator',
  CreateCard = 'CreateCard',
  Initial = 'Initial',
}

export type RootParamList = {
  [AppRoutes.Main]: undefined;
  [AppRoutes.CreateCard]: undefined;
  [AppRoutes.Initial]: undefined;
};

export const AppRouteNames = Object.keys(
  AppRoutes
) as unknown as keyof typeof AppRoutes as keyof RootParamList;

export type IAppRouteNames = typeof AppRouteNames;

export type INavigate = NavigationProp<IAppRouteNames>;
export type IRoute = RouteProp<IAppRouteNames>;

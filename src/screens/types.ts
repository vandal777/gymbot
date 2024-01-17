import {NavigationProp, RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Counter: {seconds: number};
  Home: undefined;
};

export type NavigationRootStackScreenProps<T extends keyof RootStackParamList> =
  NavigationProp<RootStackParamList, T>;

export type RouteRootStackScreenProps<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;

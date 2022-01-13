import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesName } from '../utils/routesName';

import Home from '../pages/Home';
import MovieDescription from '../pages/MovieDescription';
import TabRoutes from './tab.routes';

export type IStackRoutes = {
  Home: undefined;
  Movie_Description: {
    movieId: number;
  };
  Tab_Routes: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<IStackRoutes>();

const StackRoutes = (): JSX.Element => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={RoutesName.TAB_ROUTES} component={TabRoutes} />
      <Screen name={RoutesName.HOME} component={Home} />
      <Screen
        name={RoutesName.MOVIE_DESCRIPTION}
        component={MovieDescription}
      />
    </Navigator>
  );
};

export default StackRoutes;

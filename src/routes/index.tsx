import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';

import { useAuthContext } from '../context/AuthContext';
import Login from '../pages/Login';

const Routes = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {user.id ? <StackRoutes /> : <Login />}
    </NavigationContainer>
  );
};

export default Routes;

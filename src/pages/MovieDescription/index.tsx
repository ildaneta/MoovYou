import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { IStackRoutes } from '../../routes/stack.routes';

import { styles } from './styles';

type Props = {
  route: {
    params: {
      movieId: number;
    };
  };
};

const MovieDescription = ({ route }: Props): JSX.Element => {
  const { movieId } = route.params;

  console.log('movie ID', movieId);

  return (
    <View>
      <Text>Movie Description</Text>
    </View>
  );
};

export default MovieDescription;

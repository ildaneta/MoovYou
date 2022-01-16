import React from 'react';
import { View, Image } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

import { styles } from './styles';

interface ICastProps {
  image: string;
  castName: string;
}

const Cast = ({ image, castName }: ICastProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.image}
        resizeMethod="scale"
      />

      <Text
        label={castName}
        color={theme.colors.neutral_gray}
        fontFamily={theme.fonts.Light}
        fontSize={theme.fontsSize.XS12}
        style={styles.castName}
      />
    </View>
  );
};

export default Cast;

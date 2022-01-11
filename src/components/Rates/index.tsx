import React from 'react';
import { View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

import StarSVG from '../../images/star-icon.svg';

import { styles } from './styles';

interface IRatesProps {
  vote: string;
}

const Rates = ({ vote }: IRatesProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {!!vote && (
        <>
          <StarSVG />

          <View style={styles.divider} />

          <Text
            label={vote ? `${vote} / 10 IMDb` : ''}
            color={theme.colors.neutral_light_gray}
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Medium14}
          />
        </>
      )}
    </View>
  );
};

export default Rates;

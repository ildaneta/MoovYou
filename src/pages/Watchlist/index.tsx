import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Text from '../../components/Text';

import EmptyScreenSVG from '../../images/empty-state-favorites.svg';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

import { styles } from './styles';

const Watchlist = (): JSX.Element => {
  return (
    <>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>
        <View style={styles.containerImageDescription}>
          <EmptyScreenSVG />

          <Text
            label="You don't have favorites movies yet. Go to home or search page and find your favorite movie."
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Intermediate16}
            color={theme.colors.neutral_gray}
            textAlign={AlignTypes.center}
            style={styles.description}
          />
        </View>
      </View>
    </>
  );
};

export default Watchlist;

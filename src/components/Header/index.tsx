import React from 'react';
import { View, Text } from 'react-native';

import MoovYouBrandSVG from '../../images/moovyou-brand-icon.svg';

import { styles } from './styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.brandIcon}>
      <MoovYouBrandSVG />
    </View>
  );
};

export default Header;

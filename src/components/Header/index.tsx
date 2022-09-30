import React from 'react';
import { View } from 'react-native';

import MoovYouBrandSVG from '../../images/moovyou-brand-icon.svg';
import IconBrandSVG from '../../images/icon-brand-slider.svg';

import { styles } from './styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.brandIcon}>
      <IconBrandSVG />
    </View>
  );
};

export default Header;

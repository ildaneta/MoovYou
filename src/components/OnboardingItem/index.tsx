import React from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import theme from '../../theme';

import Text from '../Text';

import IconBrandSVG from '../../images/icon-brand-slider.svg';

import { styles } from './styles';
import { AlignTypes } from '../../utils/enum';

interface IOnboardingItemProps {
  image: ImageSourcePropType;
  description: string;
}

const OnboardingItem = ({
  image,
  description,
}: IOnboardingItemProps): JSX.Element => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.containerBrand}>
        <IconBrandSVG />
      </View>

      <View style={styles.containerImageDescription}>
        <Image
          source={image}
          style={[styles.image, { resizeMode: 'contain' }]}
        />

        <View style={styles.containerDescription}>
          <Text
            label={description}
            color={theme.colors.neutral_middle_white}
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Hudge22}
            style={styles.description}
            textAlign={AlignTypes.center}
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingItem;

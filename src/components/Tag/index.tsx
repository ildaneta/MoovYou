import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

import { styles } from './styles';

interface ITagProps {
  tagType: 'PillTag' | 'SquareTag';
  title: string;
}

const Tag = ({ tagType, title }: ITagProps): JSX.Element => {
  const styleProps = StyleSheet.create({
    tagContainer: {
      paddingVertical:
        tagType === 'PillTag'
          ? theme.dimensions.Small6
          : theme.dimensions.Quarck4,
      borderRadius:
        tagType === 'PillTag'
          ? theme.dimensions.Medium16
          : theme.dimensions.Quarck4,
    },
  });

  return (
    <View style={[styles.container, styleProps.tagContainer]}>
      <Text
        label={title}
        color={theme.colors.neutral_gray}
        fontFamily={theme.fonts.Light}
        fontSize={theme.fontsSize.XXS10}
        isUpperCase
      />
    </View>
  );
};

export default Tag;

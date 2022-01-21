import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.neutral_white,
    borderRightColor: theme.colors.neutral_gray,
    borderWidth: theme.dimensions.Thin1,
    paddingVertical: theme.dimensions.Small8,
    paddingHorizontal: theme.dimensions.Medium16,
    borderTopLeftRadius: theme.dimensions.Small6,
    borderBottomLeftRadius: theme.dimensions.Small6,
    width: theme.dimensions.width90p,
    color: theme.colors.neutral_white,
    height: theme.dimensions.Hudge40
  },
})
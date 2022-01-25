import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  containerInput: {
    flexDirection: AlignTypes.row,
  },

  textError: {
    paddingTop: theme.dimensions.Small5
  },

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

  search: {
    width: theme.dimensions.width10p,
    alignItems: AlignTypes.center,
    justifyContent: AlignTypes.center,
    borderColor: theme.colors.neutral_white,
    borderTopWidth: theme.dimensions.Thin1,
    borderBottomWidth: theme.dimensions.Thin1,
    borderRightWidth: theme.dimensions.Thin1,
    paddingVertical: theme.dimensions.Small7,
    borderTopRightRadius: theme.dimensions.Small6,
    borderBottomRightRadius: theme.dimensions.Small6,
    height: theme.dimensions.Hudge40
  },

  inputError: {
    borderColor: theme.colors.neutral_red
  }
})
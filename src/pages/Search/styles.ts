import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flex: theme.dimensions.Thin1,
    backgroundColor: theme.colors.neutral_black,
    paddingHorizontal: theme.dimensions.Medium16
  },

  header:{
    backgroundColor: theme.colors.neutral_black,
    paddingHorizontal: theme.dimensions.Medium16
  },

  containerSearch: {
    flexDirection: AlignTypes.row,
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

  containerMovie: {
    paddingTop: theme.dimensions.Large20,
  }
})
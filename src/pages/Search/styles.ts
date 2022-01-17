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

  input: {
    borderColor: theme.colors.neutral_white,
    borderRightColor: theme.colors.neutral_gray,
    borderWidth: theme.dimensions.Thin1,
    paddingVertical: theme.dimensions.Small8,
    paddingHorizontal: theme.dimensions.Medium16,
    borderTopLeftRadius: theme.dimensions.Small6,
    borderBottomLeftRadius: theme.dimensions.Small6,
    width: theme.dimensions.width90p,
    color: theme.colors.neutral_white
  },

  containerSearch: {
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center
  },

  search: {
    width: theme.dimensions.width10p,
    alignItems: AlignTypes.center,
    borderColor: theme.colors.neutral_white,
    borderTopWidth: theme.dimensions.Thin1,
    borderBottomWidth: theme.dimensions.Thin1,
    borderRightWidth: theme.dimensions.Thin1,
    paddingVertical: theme.dimensions.Small7,
    borderTopRightRadius: theme.dimensions.Small6,
    borderBottomRightRadius: theme.dimensions.Small6,
  },

  containerMovie: {
    paddingTop: theme.dimensions.Large20,
  }
})
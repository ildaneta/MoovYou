import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral_black,
    paddingHorizontal: theme.dimensions.Medium16,
    flex: theme.dimensions.Thin1,
    paddingBottom: theme.dimensions.Large30
  },

  containerHeader: {
    justifyContent: AlignTypes.space_between,
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center,
  },

  containerLogout: {
    alignItems: AlignTypes.center
  },

  divider: {
    paddingBottom: theme.dimensions.Large20
  },

  footerSpaceFlatlist: { 
    marginBottom: theme.dimensions.Large20
  },

  title: {
    paddingBottom: theme.dimensions.Large20,
    paddingTop: theme.dimensions.Large30
  },

  separatorHorizontal: {
    paddingHorizontal: theme.dimensions.Small6
  },

  containerFlatlistHorizontal: {
    height: theme.dimensions.height300
  }
})
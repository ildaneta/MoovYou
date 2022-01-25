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

 
  searchError: {
    borderColor: theme.colors.neutral_red
  },

  containerMovie: {
    paddingTop: theme.dimensions.Large20
  }
})
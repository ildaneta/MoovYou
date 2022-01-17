import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral_black,
    flex: 1,
    paddingHorizontal: theme.dimensions.Medium16,
    justifyContent: AlignTypes.center
  },
  
  header: {
    backgroundColor: theme.colors.neutral_black,
    paddingHorizontal: theme.dimensions.Medium16,
  },

  containerImageDescription: {
    alignItems: AlignTypes.center,
  },

  description: {
    paddingTop: theme.dimensions.Hudge45
  }
})
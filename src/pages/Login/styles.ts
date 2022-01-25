import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flex: theme.dimensions.Thin1,
    backgroundColor: theme.colors.neutral_black,
    justifyContent: AlignTypes.space_between,
  },

  containerImages: {
    alignItems: AlignTypes.center,
    justifyContent: AlignTypes.space_between,
    height: theme.dimensions.height300
  },

  containerLogin: {
    paddingBottom: theme.dimensions.Big100,
    paddingHorizontal: theme.dimensions.Medium16
  },

  textButton: {  
    width: theme.dimensions.width200,
    paddingBottom: theme.dimensions.Large20,
    alignSelf: AlignTypes.center,
  }
})
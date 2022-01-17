import { StyleSheet } from 'react-native';
import { AlignTypes } from '../../utils/enum';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: AlignTypes.center,
  },
  
  containerImageDescription: {
    alignItems: AlignTypes.center,
  },

  containerBrand: {
    paddingLeft: theme.dimensions.Large30,
    paddingBottom: theme.dimensions.Big100
  },

  image: {
    left: theme.dimensions.Small5,
    top: theme.dimensions.Medium16
  },

  containerDescription:{
    marginHorizontal: theme.dimensions.Medium16,
    paddingTop: theme.dimensions.Hudge45
  },

  description: {
    paddingTop: theme.dimensions.Large30
  },

  dividerText: {
    padding: theme.dimensions.XXXS10
  }
})
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: theme.dimensions.Large30
  },
  
  image: {
    borderRadius: theme.dimensions.XXXS10,
    width: theme.dimensions.Big78,
    height: theme.dimensions.Big78,
    backgroundColor: 'gray'
  },

  castName: {
    width: theme.dimensions.Big76,
    flexWrap: 'wrap',
    alignItems: AlignTypes.center,
    paddingTop: theme.dimensions.Small8
  }
})
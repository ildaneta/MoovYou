import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center,
    height: theme.dimensions.Big60,
    paddingHorizontal:theme.dimensions.Medium16,
    justifyContent: AlignTypes.space_between
  },
  
  containerDots: {
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center,
    justifyContent: AlignTypes.center,
  },

  dot: {
    height: theme.dimensions.XXXS10,
    borderRadius: theme.dimensions.Small5,
    backgroundColor: theme.colors.neutral_white,
    marginRight: theme.dimensions.XXXS10,
  },
})
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.dimensions.Small6,
    paddingVertical: theme.dimensions.Small6,
    borderColor: theme.colors.neutral_gray,
    borderWidth: theme.dimensions.Thin05,
    borderRadius: theme.dimensions.Medium16,
    justifyContent: AlignTypes.center,
    alignItems: 'center'
  },
})
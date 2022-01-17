import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flexDirection: AlignTypes.row,
  },

  divider: {
    paddingRight: theme.dimensions.Quarck4
  }
})
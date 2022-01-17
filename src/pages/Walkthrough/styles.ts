
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral_black,
  },
  containerItems: { 
    flex: theme.dimensions.Quarck4, 
    alignItems: AlignTypes.center, 
    justifyContent: AlignTypes.center }
})
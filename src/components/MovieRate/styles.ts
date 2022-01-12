import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
 
  containerImage: {
    borderRadius: theme.dimensions.XXXS10,
  },

  containerLike: {
    position: AlignTypes.absolute,
    left: theme.dimensions.Quarck4,
    top: theme.dimensions.Big179
  },

  image: {
    position: AlignTypes.relative,
    width: theme.dimensions.width133,
    height: theme.dimensions.height198,
    borderRadius: theme.dimensions.XXXS10,
  },

  containerText: {
    width: theme.dimensions.width133,
    marginVertical: theme.dimensions.XXS12
  }
})
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flex: theme.dimensions.Thin1
  },

 
  containerImage: {
    borderRadius: theme.dimensions.XXXS10,
  },

  containerLike: {
    position: AlignTypes.absolute,
    left: theme.dimensions.Quarck4,
    top: theme.dimensions.Big170
  },

  image: {
    position: AlignTypes.relative,
    width: theme.dimensions.width133,
    height: theme.dimensions.height198,
    borderRadius: theme.dimensions.XXXS10,
    backgroundColor: 'gray'
  },

  containerText: {
    width: theme.dimensions.width133,
    marginVertical: theme.dimensions.XXS12,
  },

  title: {
    paddingBottom: theme.dimensions.XXXS10
  }
})
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

const windowWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
  container: {
    flexDirection: AlignTypes.row,
  },

  containerLike: {
    position: AlignTypes.absolute,
    left: theme.dimensions.Quarck4,
    top: theme.dimensions.Big170
  },

  containerTitleTagRate: {
    width: theme.dimensions.width80p
  },

  title: {
    width: theme.dimensions.width70p
  },

  image: {
    position: AlignTypes.relative,
    width: theme.dimensions.width130,
    height: theme.dimensions.height198,
    borderRadius: theme.dimensions.XXXS10,
    marginRight: theme.dimensions.XXS12
  },
  
  dividerTextRates: {
    marginBottom: theme.dimensions.XXXS10
  },

  containerTags: {
    flexDirection: AlignTypes.row,
    width: windowWidth > 400 ? theme.dimensions.width80p : theme.dimensions.width70p,
    paddingTop: theme.dimensions.Big80,
    flexWrap: 'wrap'
  }
})
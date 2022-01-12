import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: AlignTypes.row,
    
  },

  containerLike: {
    position: AlignTypes.absolute,
    left: theme.dimensions.Quarck4,
    top: theme.dimensions.Big179
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
    flexWrap: 'wrap',
    width: theme.dimensions.width99p,
    paddingTop: theme.dimensions.Big90,
  }
})
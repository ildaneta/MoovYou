import { StyleSheet, Platform } from 'react-native';
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
    top: 180
  },

  image: {
    position: AlignTypes.relative,
    width: 130,
    height: 200,
    borderRadius: theme.dimensions.XXXS10,
    marginRight: theme.dimensions.XXS12
  },

  
  
  dividerTextRates: {
    marginBottom: theme.dimensions.XXXS10
  },

  containerTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '99%',
    paddingTop: 90,
  }
})
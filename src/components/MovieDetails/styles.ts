import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  movieDetails: {
    paddingBottom: theme.dimensions.Large30
  },

  containerRate: {
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center,
  },
  
  rate: {
    width: theme.dimensions.Big80
  },
  
  
  containerGenreTag: {
    paddingVertical: theme.dimensions.Thin2,
  },

  duration: {
    width: theme.dimensions.width50p,
    paddingLeft: theme.dimensions.Quarck4
  },

  containerGenre: { 
    paddingTop: theme.dimensions.Small5, 
    flexDirection: AlignTypes.row
  }
})
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

export const styles = StyleSheet.create({
  container: {
    flex: theme.dimensions.Thin1,
    backgroundColor: theme.colors.neutral_black,
  },

  containerImage: {
    backgroundColor: theme.colors.neutral_black,
  },
  
  containerMovieDetails: {
    paddingHorizontal: theme.dimensions.Medium16
  },

  image: {
    width: theme.dimensions.widthFull,
    height: theme.dimensions.height220,
    position: AlignTypes.relative
  },

  arrowBack: {
   position: AlignTypes.absolute,
   top: theme.dimensions.Medium16,
   left: theme.dimensions.Medium16
  },

  movieTitle: {
    paddingVertical: theme.dimensions.Medium16,
    width: theme.dimensions.height85p,
    flexWrap: 'wrap',
  },

  containerTitleLike: {
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.flex_start,
    justifyContent: AlignTypes.space_between
  },

  like: {
    paddingTop: theme.dimensions.Large22
  },

  synopsis: {
    paddingTop: theme.dimensions.Medium16,
    paddingBottom: theme.dimensions.Large30
  },

  actorsList: {
    justifyContent: AlignTypes.space_between,
    paddingHorizontal: theme.dimensions.Small5,
  }

})
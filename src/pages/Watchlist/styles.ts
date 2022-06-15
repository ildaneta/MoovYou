import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral_black,
    flex: theme.dimensions.Thin1,
    paddingHorizontal: theme.dimensions.Medium16,
    justifyContent: AlignTypes.center
  },

  scrollviewContainer: {
    backgroundColor: theme.colors.neutral_black,
    flex: theme.dimensions.Thin1,
    paddingHorizontal: theme.dimensions.Medium16,
  },
  
  header: {
    backgroundColor: theme.colors.neutral_black,
    paddingHorizontal: theme.dimensions.Medium16,
  },

  containerImageDescription: {
    alignItems: AlignTypes.center,
  },

  description: {
    paddingTop: theme.dimensions.Hudge45
  },

  title: {
    paddingBottom: theme.dimensions.Large20,
    paddingTop: theme.dimensions.Large30
  },

  containerTags: {
    flexDirection: AlignTypes.row,
    width: windowWidth > 400 ? theme.dimensions.width80p : theme.dimensions.width70p,
    paddingTop: theme.dimensions.Big80,
    flexWrap: 'wrap'
  }
})
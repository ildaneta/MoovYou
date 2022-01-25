import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';
 
 export const styles = StyleSheet.create({
   container: {
    flexDirection: AlignTypes.row,
    alignItems: AlignTypes.center,
    backgroundColor: theme.colors.neutral_gray,
    width: theme.dimensions.widthFull,
    height: theme.dimensions.Hudge56,
    borderRadius: theme.dimensions.Small5,
    marginBottom: theme.dimensions.Medium16
   },

   containerIcon: { 
    width: theme.dimensions.Hudge56,
    height: theme.dimensions.Hudge56,
    borderRightWidth: theme.dimensions.Thin1,
    borderRightColor: theme.colors.neutral_black,
    alignItems: AlignTypes.center,
    justifyContent: AlignTypes.center,

   },

   text: {
     marginLeft: theme.dimensions.width22p,
     fontFamily: theme.fonts.Medium,
     fontSize: theme.fontsSize.Intermediate16
   }
 }) 
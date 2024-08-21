import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    upperWrapper: {
      flex: 0.6,
      justifyContent: 'center',
    },
    bottomWrapper: {
        flex: 0.4,
        justifyContent: 'space-between',
        padding:hp(4),
        paddingHorizontal:hp(8)
      },
  
      genreView:{
        flex:0.1,
        borderBottomWidth:1,
        borderColor: colors.secondaryBackground,
        paddingBottom:hp(1),
        marginTop: hp(4),
        marginBottom:hp(3)
     
      },
    overView:{
        flex:0.3,
    }  ,
    paddedView:{
      marginHorizontal:wp(3.5),
    
    },
    imageStyles: {
      flex: 1,
      backgroundColor:"black"
    },
    contentContainerView: {
      position: 'absolute',
      bottom: hp(5),
      right: wp(4),
      left: wp(4),
      padding: hp(3),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ContentWrapper: {
      marginVertical: hp(1),
    },
    title: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(4.2),
      color: colors.primaryBackground,
    },
    categoryTitle:{
      
        color: colors.primaryText,
        marginVertical:hp(2),
    },
    overViewText:{
      fontFamily:'Poppins-Light',
      fontSize:hp(3),
      lineHeight: hp(5),
      letterSpacing:hp(0.1),
      textTransform:'capitalize'
    },

    video: {
      width: '100%',
      height: 300,
    },
  });

  return {
    styles,
  };
};

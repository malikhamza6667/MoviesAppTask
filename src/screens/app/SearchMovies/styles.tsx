import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    searchContainerView: {
      paddingTop: hp(2),
      paddingHorizontal: wp(3),
      alignItems: 'center',
      paddingBottom: hp(6),
      borderBottomWidth: hp(0.1),
      borderColor: colors.secondaryBackground,
    },
    contentView:{
        flex:1,
        top:hp(3),
      
    },
    IconView: {
      flex: 0.1,
    },
    itemCard: {
      width: wp(22),
      height: hp(30),
      borderRadius: hp(5),
      marginHorizontal: wp(0.5),
    },
    itemText: {
      fontSize: hp(4),
    },
    categoryHeader:{
      marginTop: hp(5),
      height:hp(8),
      marginBottom:hp(2),
      marginHorizontal:wp(2),
      borderBottomWidth:0.5,
      borderColor: colors.secondaryBackground
    }
  });

  return {
    styles,
  };
};

import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
   
    contentView:{
        flex:1,
        top:hp(3),
      
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
    
  });

  return {
    styles,
  };
};

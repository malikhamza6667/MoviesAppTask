import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    Card: {
      height: hp(50),
      overflow: 'hidden',
      width: wp(45),
      marginVertical: hp(1),
      marginHorizontal: wp(5),
      justifyContent: 'center',
    },
    imageStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingHorizontal: wp(2.5),
      paddingBottom: hp(5),
      resizeMode: 'cover',
      backgroundColor:"black",
      borderRadius:hp(4)
    },
    title: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(6),
      zIndex: 1,
      color: colors.secondaryText,
    },
  });

  return {
    styles,
  };
};

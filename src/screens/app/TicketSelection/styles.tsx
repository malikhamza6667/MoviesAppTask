import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      top: hp(3),
      justifyContent: 'center',
      paddingHorizontal: wp(2),
    },

    itemCard: {
      width: wp(22),
      height: hp(30),
      borderRadius: hp(5),
      marginHorizontal: wp(0.5),
    },
    dateText: {
      marginBottom: hp(4),
      fontSize: 16,
      fontFamily: 'Poppins-Medium',
    },
    itemText: {
      fontSize: hp(4),
    },
    roundView: {
      paddingHorizontal: wp(2),
      paddingVertical: hp(2),
      marginRight: wp(2),
      borderRadius: hp(3),
    },
    spacer: {
      height: hp(8),
    },
    footer: {
      position: 'absolute',
      bottom: hp(6),
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      left: 0,
    },
  });

  return {
    styles,
  };
};

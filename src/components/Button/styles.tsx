import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = ({isHollow,fullWidth}: {isHollow?: boolean,fullWidth?:boolean}) =>
    StyleSheet.create({
      wrapper: {
        flexDirection: 'row',
        height: hp(12),
        width: fullWidth ? wp(40):wp(26) ,
        backgroundColor: isHollow ? 'transparent' : colors.primaryButton,
        borderRadius: hp(3),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: isHollow ? hp(0.3) : 0,
        borderColor: colors.primaryButton,
      },
      iconView: {
        marginRight: hp(2),
      },
      title: {
        fontFamily: 'Poppins-SemiBold',
        color: colors.primaryBackground,
        letterSpacing: 0.5,
      },
    });
  return {
    styles,
  };
};

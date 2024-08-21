import {useAppTheme} from '@contexts';
import {hp} from '@utils';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    tabBarStyles: {
      height: hp(20),
      backgroundColor: colors.tabBarBackground,
      padding: hp(2),
      borderTopEndRadius: hp(8),
      borderTopStartRadius: hp(8),
      paddingBottom: hp(3),
    },
    tabBarLabelStyle: {
      bottom: hp(1),
    },
  });
  return {
    styles,
    colors,
  };
};

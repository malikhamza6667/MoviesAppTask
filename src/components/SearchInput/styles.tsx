import {useAppTheme} from '@contexts';
import {hp} from '@utils';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const styles = StyleSheet.create({
    containerView: {
      flexDirection: 'row',
      backgroundColor: colors.secondaryBackground,
      padding: Platform.OS == 'ios' ? hp(2.5) : hp(0.5),
      alignItems: 'center',
      borderRadius: hp(8),
    },
    IconView: {
      flex: 0.1,
    },
    textInput:
        {flex:0.8,
            fontFamily: 'Poppins-Light'

        }
    
  });

  return {
    styles,
  };
};

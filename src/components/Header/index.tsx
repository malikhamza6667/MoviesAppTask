import {Text, TouchableOpacity, View} from 'react-native';
import {TabHeaderType} from './types';
import React from 'react';
import {BackIcon, SearchIcon} from '@assets';
import {hp} from '@utils';
import {useAppTheme} from '@contexts';
import {useStyles} from './styles';
export const Header: React.FC<TabHeaderType> = ({
  title,
  Icon,
  onPress,
  isAlignedStart,
  backgroundColor,
  subtitle
}) => {
  const ICONSIZE = hp(10);
  const {styles} = useStyles();
  const {colors} = useAppTheme();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        {Icon ? (
          <Icon
            height={ICONSIZE}
            width={ICONSIZE}
            color={backgroundColor ?? colors.secondaryText}
          />
        ) : (
          <BackIcon
            height={ICONSIZE}
            width={ICONSIZE}
            color={backgroundColor ?? colors.secondaryText}
          />
        )}
      </TouchableOpacity>
      <View
        style={[
          styles.headerContent,
          {
         alignItems:isAlignedStart ? 'flex-start' : 'center',
            height: ICONSIZE,
          },
        ]}>
          <View style={{alignItems:isAlignedStart ? 'flex-start' : 'center'}}>
          <Text style={[styles.title,{color:backgroundColor ?? colors.secondaryText}]}>{title ?? 'Watch'}</Text>
        { subtitle && <Text style={[styles.subTitle]}>{subtitle ?? 'Watch'}</Text>}
          </View>
       
      </View>
    </View>
  );
};

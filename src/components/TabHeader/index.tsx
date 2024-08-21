import {Text, TouchableOpacity, View} from 'react-native';
import {TabHeaderType} from './types';
import React from 'react';
import {SearchIcon} from '@assets';
import {hp} from '@utils';
import {useAppTheme} from '@contexts';
import { useStyles } from './styles';
export const TabHeader: React.FC<TabHeaderType> = ({title, Icon,onPress}) => {
  const ICONSIZE = hp(12);
  const {styles}=useStyles()
  const {colors} = useAppTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title ?? 'Watch'}</Text>

      <TouchableOpacity onPress={onPress}>
      {Icon ? (
        <Icon height={ICONSIZE} width={ICONSIZE} color={colors.primaryText} />
      ) : (
        <SearchIcon
          height={ICONSIZE}
          width={ICONSIZE}
          color={colors.primaryText}
        />
      )}
      </TouchableOpacity>
     
    </View>
  );
};

import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScreenWrapperTypes} from './types';
import {useStyles} from './styles';
import {DashboardIcon} from '@assets';
export const ScreenWrapper: React.FC<ScreenWrapperTypes> = ({
  children,
  style
}): React.ReactElement => {
  const {styles} = useStyles();
  return <SafeAreaView style={[styles.mainWrapper,style]}>{children}</SafeAreaView>;
};

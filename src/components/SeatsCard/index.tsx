import {SeatsIcon} from '@assets';
import {Card} from '@layouts';
import {ActivityIndicator, Text, View} from 'react-native';
import {SeatsCard as SeatsCardType} from './types';
import {useStyles} from './styles';
import {hp, wp} from '@utils';
import React from 'react';

export const SeatsCard: React.FC<SeatsCardType> = ({item}) => {
  const {styles} = useStyles();
  const LazySeatsIcon = React.lazy(() => import('../../assets/svgs/SeatsIcon.svg'));

const MyComponent = () => (
  <React.Suspense fallback={<ActivityIndicator size="small"/>}>
    <LazySeatsIcon width={wp(35)} height={hp(35)} />
  </React.Suspense>
);
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.itemTime}>{item?.time}</Text>
        <Text style={styles.itemHall}>{item?.hall}</Text>
      </View>
      <Card style={styles.card}>
       
      <MyComponent/>
      </Card>

      <Text style={styles.itemHall}>
        From
        <Text style={styles.boldText}> {item?.range1} </Text>
        or
        <Text style={styles.boldText}> {item?.range2} </Text>
        Bonus
      </Text>
    </View>
  );
};

import {
  Button,
  Header,
  ScreenWrapper,
  SearchResultCard,
  SeatsCard,
} from '@components';
import {useAppTheme} from '@contexts';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useStyles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DummySlots, SCREENS, dates} from '@constants';
import React, {useState} from 'react';

const TicketSelection = () => {
  const navigation: any = useNavigation();
  const {colors} = useAppTheme();
  const {styles} = useStyles();
  const [selected, setSelected] = useState(5);

  const DatesList = () => {
    const RenderDates = ({item}: {item: number}) => {
      return (
        <TouchableOpacity
          style={[
            styles.roundView,
            {
              backgroundColor:
                selected == item
                  ? colors.primaryButton
                  : colors.secondaryBackground,
            },
          ]}
          onPress={() => setSelected(item)}>
          <Text
            style={[
              styles.itemText,
              {
                color:
                  selected == item
                    ? colors.primaryBackground
                    : colors.primaryText,
              },
            ]}>{`${item} Mar`}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <Text style={styles.dateText}>Date</Text>
        <FlatList horizontal data={dates} renderItem={RenderDates} 
        keyExtractor={(item,index)=>index.toString() }
        />
      </View>
    );
  };
  const SeatsList = () => {
    return (
      <View>
        <FlatList
          horizontal
          data={DummySlots}
          renderItem={({item}) => {
            return <SeatsCard item={item} />;
          }}
          keyExtractor={(item, index) => index?.toString()}
        />
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <Header
        onPress={() => navigation.goBack()}
        backgroundColor={colors.primaryText}
        title={"The King's Man"}
        subtitle={'In theaters december 22, 2021'}
      />
      <View style={styles.contentView}>
        <DatesList />
        <View style={styles.spacer} />
        <SeatsList />

        <View style={styles.footer}>
          <Button
            title="Select Seats"
            fullWidth
            onPress={() => navigation.navigate(SCREENS.TICKETBOOKING)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TicketSelection;

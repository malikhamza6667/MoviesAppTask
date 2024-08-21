import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GenreListType} from './types';
import { useStyles } from './styles';
import { hp } from '@utils';


const itemColors=[
    '#15D2BC',
    '#E26CA5',
    '#564CA3',
    '#CD9D0F',
]


export const GenreList: React.FC<GenreListType> = ({data}) => {

const {styles}=useStyles()

const getItemColor=(index:number)=>itemColors[index % itemColors.length];

getItemColor(7)

  const GenreListItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles({itemColor:  getItemColor(index) }).item}>
        <Text style={styles({}).title}>{item?.name}</Text>
      </View>
    );
  };
  const KeyExtractor = (item: any, index: number) => index.toString();
  return (
    <View style={styles({}).mainWrapper}>
 <FlatList

      horizontal
      data={data}
      renderItem={GenreListItem}
      keyExtractor={KeyExtractor}
    />
    </View>
   
  );
};

import {Dots, DummyImage} from '@assets';
import {Card} from '@layouts';
import {Image, Text, View} from 'react-native';
import {useStyles} from './styles';
import React from 'react';
import {SearchResultCardType} from './types';

export const SearchResultCard: React.FC<SearchResultCardType> = ({
  title,
  onPress,
  imageUrl,
  genre,
}) => {
  const {styles} = useStyles();
  return (
    <Card style={styles.wrapper} onPress={onPress}>
      <View>
        <Image
          source={imageUrl ? {uri: imageUrl} : DummyImage}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.tilesView}>
          <Text style={styles.titleText}>{title ?? 'Unknown'} </Text>
          <Text style={styles.categoryText}>{genre ?? 'unknown'} </Text>
        </View>

        <Dots />
      </View>
    </Card>
  );
};

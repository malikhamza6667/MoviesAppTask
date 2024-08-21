import {Card} from '@layouts';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {MovieCardType} from './types';
import {DummyImage} from '@assets';
import {useStyles} from './styles';
import { hp } from '@utils';

export const MovieCard: React.FC<MovieCardType> = ({uri, title,onPress,cardStyles,textStyles}) => {
  const {styles} = useStyles();
  return (
    <Card onPress={onPress} style={[styles.Card,cardStyles!]}>
      <ImageBackground
        source={uri ? {uri} : DummyImage}
        resizeMode="cover"
        imageStyle={{borderRadius: hp(3)}}
        style={styles.imageStyle}>
        <Text style={[styles.title,textStyles!]}>{title ?? 'Unknown'}</Text>
      </ImageBackground>
    </Card>
  );
};

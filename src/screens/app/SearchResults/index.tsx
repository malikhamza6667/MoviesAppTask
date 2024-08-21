import {Header, ScreenWrapper, SearchResultCard} from '@components';
import {useAppTheme} from '@contexts';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useStyles} from './styles';
import {FlatList, View} from 'react-native';
import {SCREENS} from '@constants';
import {hp} from '@utils';

const SearchResults = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const movies = route?.params?.movies ?? [];
  const categories = route?.params?.categories ?? [];
  const {colors} = useAppTheme();
  const {styles} = useStyles();
  return (
    <ScreenWrapper>
      <Header
        onPress={() => navigation.goBack()}
        backgroundColor={colors.primaryText}
        isAlignedStart
        title={`${movies?.length} Results Found`}
      />
      <View style={styles.contentView}>
        <FlatList
          data={movies}
          contentContainerStyle={{paddingBottom: hp(5)}}
          renderItem={({item}: {item: any}) => (
            <SearchResultCard
              onPress={() =>
                navigation.navigate(SCREENS.MOVIEDETAILS, {movieId: item?.id})
              }
              title={item?.title}
              imageUrl={
                item?.poster_path || item?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w780${
                      item?.poster_path ?? item?.backdrop_path
                    }`
                  : null
              }
              genre={
                item.genre_ids
                  ?.map(
                    (id: number) =>
                      categories.find((category: any) => category.id === id)
                        ?.name,
                  )
                  .find((name: string | undefined) => name !== undefined) // Get only the first non-undefined genre name
              }
            />
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SearchResults;

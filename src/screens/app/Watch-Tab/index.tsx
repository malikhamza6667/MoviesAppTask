import {MovieCard, ScreenWrapper, TabHeader} from '@components';
import {useAppTheme} from '@contexts';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '@constants';
import {useWatch} from '@hooks';

const Watch = () => {
  const {styles} = useStyles();
  const navigation: any = useNavigation();
  const {loading, initialLoading, setFetchNext, movies, totalPages, fetchNext,handleLoadMore} =
    useWatch();

 

  const renderFooter = () => {
    return loading && totalPages > fetchNext ? (
      <View style={{padding: 10}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  return (
    <ScreenWrapper style={styles.screenWrapper}>
      <TabHeader onPress={() => navigation.navigate(SCREENS.SEARCHMOVIES)} />
      <View style={{flex: 1}}>
        {initialLoading ? (
          <ActivityIndicator size="large" style={{flex: 1}} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movies}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieCard
                title={item?.title}
                uri={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                onPress={() =>
                  navigation.navigate(SCREENS.MOVIEDETAILS, {movieId: item.id})
                }
              />
            )}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Watch;

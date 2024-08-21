import {
  Header,
  MovieCard,
  ScreenWrapper,
  SearchInput,
  SearchResultCard,
} from '@components';
import {ActivityIndicator, Alert, FlatList, Text, View} from 'react-native';
import {useStyles} from './styles';
import {useEffect, useState} from 'react';
import {useSearchMovies} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '@constants';
import {hp} from '@utils';

const SearchMovies = () => {
  const {
    search,
    setSearch,
    fetchCategories,
    loading,
    categories,
    searchMovie,
    searchLoading,
    topResults,
    handleTextChange,
    handleSubmitSearch,
  } = useSearchMovies();
  const navigation: any = useNavigation();
  useEffect(() => {
    (async () => {
      await fetchCategories();
    })();
  }, []);
  const {styles} = useStyles();

  const CategoryView = () => {
    return (
      <View style={styles.contentView}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{paddingBottom: hp(5)}}
            numColumns={2}
            data={categories}
            renderItem={({item}: {item: any}) => {
              return (
                <MovieCard
                  title={item?.name}
                  uri={item?.imageUrl}
                  cardStyles={styles.itemCard}
                  onPress={() => Alert.alert('Pressed the card')}
                  textStyles={styles.itemText}
                />
              );
            }}
          />
        )}
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.searchContainerView}>
        <SearchInput
          onCancel={() => {
            setSearch('');
            navigation.goBack();
          }}
          value={search}
          onSearch={handleSubmitSearch}
          onChangeValue={handleTextChange}
        />
      </View>
      {search || topResults.length || searchLoading ? (
        <View style={styles.contentView}>
          {searchLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <View style={styles.categoryHeader}>
                {topResults.length > 0 && <Text>Top Results</Text>}
              </View>

              <FlatList
                data={topResults}
                contentContainerStyle={{paddingBottom: hp(5)}}
                renderItem={({item, index}: {item: any; index: number}) => {
                  return (
                    <SearchResultCard
                      onPress={() =>
                        navigation.navigate(SCREENS.MOVIEDETAILS, {
                          movieId: item?.id,
                        })
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
                              categories.find(category => category.id === id)
                                ?.name,
                          )
                          .find(
                            (name: string | undefined) => name !== undefined,
                          ) // Get only the first non-undefined genre name
                      }
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )}
        </View>
      ) : (
        <CategoryView />
      )}
    </ScreenWrapper>
  );
};

export default SearchMovies;

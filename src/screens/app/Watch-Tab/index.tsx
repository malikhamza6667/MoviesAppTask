import { MovieCard, ScreenWrapper, TabHeader } from '@components';
import { useAppTheme } from '@contexts';
import { ActivityIndicator, FlatList, View, Platform } from 'react-native';
import { useStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@constants';
import { useWatch } from '@hooks';
import { useRef, useState } from 'react';

const Watch = () => {
  const { styles } = useStyles();
  const navigation: any = useNavigation();
  const {
    loading,
    initialLoading,
    movies,
    totalPages,
    fetchNext,
    handleLoadMore,
  } = useWatch();

  const verticalRef = useRef(0);
  const [toggleSearchInput, setToggleSearchInput] = useState(true);

  const handleScroll = (event: any) => {
    const currentVerticalPos = event.nativeEvent.contentOffset.y;
    if (currentVerticalPos <= 0) {
      setToggleSearchInput(true);
    } else if (Math.abs(currentVerticalPos - verticalRef.current) > 10) {
      setToggleSearchInput(currentVerticalPos < verticalRef.current);
      verticalRef.current = currentVerticalPos;
    }
  };

  const renderFooter = () => {
    return loading && totalPages > fetchNext ? (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <ScreenWrapper style={styles.screenWrapper}>
      {toggleSearchInput && (
        <TabHeader onPress={() => navigation.navigate(SCREENS.SEARCHMOVIES)} />
      )}
      <View style={{ flex: 1 }}>
        {initialLoading ? (
          <ActivityIndicator size="large" style={{ flex: 1 }} />
        ) : (
          <FlatList
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            data={movies}
            onScroll={handleScroll}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            contentContainerStyle={[styles.contentContainer, { paddingTop: Platform.OS === 'ios' ? 20 : 0 }]} // Adjust for iOS safe area
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <MovieCard
                title={item?.title}
                uri={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                onPress={() =>
                  navigation.navigate(SCREENS.MOVIEDETAILS, { movieId: item.id })
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

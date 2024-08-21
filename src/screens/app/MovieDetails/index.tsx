import {DummyImage, PlayIcon} from '@assets';
import {Button, GenreList, Header, ScreenWrapper} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useStyles} from './styles';
import {useAppTheme} from '@contexts';
import {useEffect, useRef} from 'react';
import {useMoviesDetails} from '@hooks';
import WebView from 'react-native-webview';
import {SCREENS} from '@constants';
import {hp} from '@utils';
const MovieDetails = () => {
  const routes: any = useRoute();
  const movieId = routes.params?.movieId;
  const navigation: any = useNavigation();
  const {styles} = useStyles();
  const {colors} = useAppTheme();
  const {
    getMovieDetails,
    movieDetails,
    loading,
    getMovieVideos,
    trailerVideo,
    BtnLoading,
  } = useMoviesDetails();
  useEffect(() => {
    (async () => {
      if (!movieId) return;
      await getMovieDetails(movieId);
    })();
  }, [movieId]);

  if (loading) {
    return (
      <ScreenWrapper>
        <ActivityIndicator />
      </ScreenWrapper>
    );
  }
  const ContentWrapper = ({children}: {children: React.ReactNode}) => {
    return <View style={styles.ContentWrapper}>{children}</View>;
  };

  const CategoryText = ({title}: {title: string}) => {
    return <Text style={[styles.title, styles.categoryTitle]}>{title}</Text>;
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.upperWrapper}>
        <ImageBackground
          source={
            movieDetails?.poster_path || movieDetails?.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w780${
                    movieDetails?.poster_path ?? movieDetails?.backdrop_path
                  }`,
                }
              : DummyImage
          }
          resizeMode="cover"
          style={styles.imageStyles}>
          <SafeAreaView>
            <Header isAlignedStart onPress={() => navigation.goBack()} />
          </SafeAreaView>
          <View style={styles.contentContainerView}>
            <ContentWrapper>
              <Text style={styles.title}>
                {`In theaters ${new Date(
                  movieDetails?.release_date,
                ).toDateString()}`}
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <Button
                onPress={() => {
                  navigation.navigate(SCREENS.TICKETSELECTION);
                }}
                title={'Get Tickets'}
              />
            </ContentWrapper>
            <ContentWrapper>
              <Button
                onPress={async () => {
                  await getMovieVideos(movieId);
                }}
                title={'Watch Trailer'}
                hasIcon
                isHollow
                loading={BtnLoading}
                Icon={() => <PlayIcon color={colors.primaryBackground} />}
              />
            </ContentWrapper>
          </View>
        </ImageBackground>
      </View>

      {movieDetails && movieDetails?.genres?.length > 0 && (
        <View style={[styles.genreView, styles.paddedView]}>
          <CategoryText title="Genres" />
          <GenreList data={movieDetails?.genres} />
        </View>
      )}
      <View style={[styles.overView, styles.paddedView]}>
        <CategoryText title="Overview" />
        <ScrollView contentContainerStyle={{paddingBottom: hp(5)}}>
          <Text style={styles.overViewText}>{movieDetails?.overview}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieDetails;

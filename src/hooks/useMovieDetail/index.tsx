import {SCREENS} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {watchservice} from '@services';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';

export const useMoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [trailerVideo, setTrailerVideo] = useState('');
  const [BtnLoading, setBtnLoading] = useState(false);
  const navigation: any = useNavigation();

  const getMovieDetails = async (id: number) => {
    try {
      if (loading) return;
      setLoading(true);
      const result = await watchservice.fetchMovieById(id);
      if (!result.success) throw result.error;
      setMovieDetails(result.data);
    } catch (error) {
      setMovieDetails(null);
      console.log('[Err in getting details]', error);
      return Alert.alert("Error in getting movie details");
    } finally
    {
      setLoading(false);
    }
  };

  const getMovieVideos = async (id: number) => {
    try {
      if (BtnLoading) return;
      setBtnLoading(true);
      const res: any = await watchservice.fetchMovieVideos(id);

      if (!res?.success) throw res?.error;
      const movieclips: any[] = res?.data?.results;
      const trailer = movieclips.find(
        item => item?.official && item?.type == 'Trailer',
      );

      if (!trailer || !trailer.key)
        return Alert.alert('There was no trailer found for this movie');
      navigation.navigate(SCREENS.WATCHTRAILER, {
        trailer: `https://www.youtube.com/embed/${trailer?.key}?autoplay=1&controls=0`,
        trailerKey: trailer?.key,
      });
    } catch (error) {
      Alert.alert("Movie Trailer wasn't fetched");
      console.log('[Err in getting trailer]', error);
    } finally {
      setBtnLoading(false);
    }
  };

  return useMemo(
    () => ({
      loading,
      movieDetails,
      getMovieDetails,
      getMovieVideos,
      BtnLoading,
      trailerVideo,
    }),
    [
      loading,
      movieDetails,
      getMovieDetails,
      BtnLoading,
      getMovieVideos,
      trailerVideo,
    ],
  );
};

import {watchservice} from '@services';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {debounce} from 'lodash';
import {SCREENS} from '@constants';
import {useNavigation} from '@react-navigation/native';
export const useSearchMovies = () => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [topResults, setTopResults] = useState<any[]>([]);
  const navigation: any = useNavigation();
  const fetchCategories = async () => {
    try {
      if (loading) return;
      setLoading(true);
      const result: any = await watchservice.fetchMovieGenres();
      if (!result?.success) throw result?.error;
      setCategories(result?.data);
    } catch (error) {
      console.log('[Err in getting generes]', error);
      Alert.alert('Failed to get movie categories');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSearch = async () => {
    try {
      const movies = await searchMovie();
      if(!movies?.length) return
      navigation.navigate(SCREENS.SEARCHRESULTS, {movies,categories});
    } catch (error) {
      console.log('[Handle submit failed]', error);
      Alert.alert('Something went wrong while handling request');
    } finally {
      setTopResults([]);
      setSearch('');
    }
  };

  const searchMovie = useCallback(
    async (text?: string) => {
      try {
        let query = text ?? search;
        if (searchLoading || query.length < 2) return;
        setSearchLoading(true);
        const resp = await watchservice.searchMovieByChars(query);
        if (!resp?.success) throw resp?.error;
        setTopResults(resp?.data!?.splice(0, 3));
        return resp?.data || [];
      } catch (error) {
        console.log('[Err fetching the search results]', error);
        Alert.alert('Search not found');
        return [];
      } finally {
        setSearchLoading(false);
      }
    },
    [search, searchLoading],
  );

  const handleTextChange = async (text: string) => {
    setSearch(text);
    debounceCall(text);
  };

  const debounceCall = useCallback(
    debounce((text: string) => {
      searchMovie(text);
    }, 500),
    [],
  );

  return useMemo(
    () => ({
      search,
      setSearch,
      fetchCategories,
      loading,
      categories,
      searchLoading,
      searchMovie,
      handleTextChange,
      topResults,
      handleSubmitSearch,
    }),
    [
      search,
      setSearch,
      fetchCategories,
      loading,
      categories,
      searchLoading,
      searchMovie,
      topResults,
      handleSubmitSearch,
    ],
  );
};

import {watchservice} from '@services';
import {useCallback, useEffect, useMemo, useState} from 'react';

export const useWatch = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [fetchNext, setFetchNext] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, [fetchNext]);

  const fetchMovies = useCallback(async () => {
    try {
      if (loading || totalPages === fetchNext) return;

      if (fetchNext === 1) {
        setInitialLoading(true);
      } else {
        setLoading(true);
      }

      const results = await watchservice.fetchUpcoming(fetchNext);
      if (!results.success) throw results.error;

      setMovies(prev => {
        const newMovies = results.data?.results || [];
        const existingMovieIds = prev.map(movie => movie.id);
        const uniqueMovies = newMovies.filter(movie => !existingMovieIds.includes(movie.id));

        return [...prev, ...uniqueMovies];
      });

      setTotalPages(results.data?.total_pages || 0);
    } catch (error) {
      console.log('[Err fetching movies]', error);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [fetchNext, loading, totalPages]);

  const handleLoadMore =useCallback(
   async () => {
        if (!loading && totalPages > fetchNext) {
          setFetchNext(prev => prev + 1);
        }
      },[loading,totalPages,fetchNext]
  ) 
  return useMemo(() => ({
    setFetchNext,
    totalPages,
    fetchNext,
    loading,
    initialLoading,
    movies,
    handleLoadMore
  }), [setFetchNext, totalPages, fetchNext, loading, initialLoading, movies, handleLoadMore]);
};

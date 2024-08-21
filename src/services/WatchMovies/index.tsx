import Config from 'react-native-config';
import axios from 'axios';
class WatchMovies {
  headers = {
    Authorization: `Bearer ${Config.ACCESS_TOKEN}`,
  };
  BASEURL = 'https://api.themoviedb.org/3/';

  fetchUpcoming(page = 1): Promise<FetchUpcomingResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const apicall = await axios.get(
          `${this.BASEURL}/movie/upcoming?api_key=${Config.API_KEY}&&page=${page}`,
          {
            headers: this.headers,
          },
        );
        const result = apicall.data;
        resolve({
          success: true,
          message: 'Success',
          data: {
            results: result?.results,
            total_pages: result.total_pages,
          },
        });
      } catch (error) {
        reject({
          error,
          message: 'Failed req',
          success: false,
          data: {
            results: [],
            total_pages: 0,
          },
        });
      }
    });
  }
  fetchMovieById(id: number): Promise<SingleMovieResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) throw new Error('No Id found');

        const apicall = await axios.get(
          `${this.BASEURL}/movie/${id}?api_key=${Config.API_KEY}`,
          {headers: this.headers},
        );

        const result = apicall.data;
        resolve({
          success: true,
          message: 'Success',
          error: null,
          data: result,
        });
      } catch (error) {
        reject({
          success: false,
          message: 'Error fetching movie',
          data: null,
          error,
        });
      }
    });
  }

  fetchMovieVideos(id: number): Promise<FetchVideosResp> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) throw new Error('No Id found');
        const apicall = await axios.get(
          `${this.BASEURL}/movie/${id}/videos?api_key=${Config.API_KEY}`,
          {headers: this.headers},
        );
        resolve({
          success: true,
          message: 'Fetched Success',
          data: apicall.data,
        });
      } catch (error) {
        reject({
          success: false,
          message: 'failed to fetch',
          error,
        });
      }
    });
  }

  fetchMovieGenres(): Promise<FetchGenreResp> {
    return new Promise(async (resolve, reject) => {
      try {
        const apicall = await axios.get(
          `${this.BASEURL}/genre/movie/list?api_key=${Config.API_KEY}`,
          {headers: this.headers},
        );

        const genres: any[] = apicall.data?.genres;

        const genresWithImages = await Promise.all(
          genres?.map(async genre => {
            const moviesresult = await axios.get(
              `${this.BASEURL}/discover/movie?api_key=${Config.API_KEY}&with_genres=${genre.id}`,
              {headers: this.headers},
            );
            const movies = moviesresult.data;
            const backdropPath = movies.results[0].backdrop_path;
            const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;
            return {
              ...genre,
              imageUrl,
            };
          }),
        );
        resolve({
          success: true,
          message: 'failed to fetch',
          data: genresWithImages,
        });
      } catch (error) {
        reject({
          success: false,
          error,
          message: 'Failed to get genres',
        });
      }
    });
  }

  searchMovieByChars(query: string): Promise<FetchSearchResp> {
    return new Promise(async (resolve, reject) => {
      try {
        const apicall = await axios.get(
          `${this.BASEURL}/search/movie?api_key=${Config.API_KEY}&query=${query}`,
          {headers: this.headers},
        );
        const results = apicall.data;

        resolve({
          success: true,
          message: 'Fetched Success',
          data: results?.results,
        });
      } catch (error) {
        reject({
          message: 'Failed to find movies',
          success: false,
          error,
        });
      }
    });
  }
}

export const watchservice = new WatchMovies();

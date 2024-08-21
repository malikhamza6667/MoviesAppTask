type Movie= {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
  }

  type FetchUpcomingResponse ={
    success: boolean;
    message: string;
    data?: {
      results: Movie[];
      total_pages: number;
    };
    error?: any;
  }

  type SingleMovieResponse={
    success: boolean;
    message: string;
    data?: Movie;
    error?: any;
  }
  type FetchVideosResp={
    success: boolean;
    message: string;
    data?: any[];
    error?: any;
  }
  type FetchGenreResp={
    success: boolean;
    message: string;
    data?: any[];
    error?: any;
  }
  type FetchSearchResp={
    success: boolean;
    message: string;
    data?: any[];
    error?: any;
  }
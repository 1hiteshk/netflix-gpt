import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      // whatever will come over here (action.payload) I will store it in nowPlayingMovies
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      // whatever will come over here (action.payload) I will store it in popularMovies
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
      // whatever will come over here (action.payload) I will store it in popularMovies
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
      // whatever will come over here (action.payload) I will store it in popularMovies
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;

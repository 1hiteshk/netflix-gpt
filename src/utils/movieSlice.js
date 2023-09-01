import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        upcomingMovies: null,
        nowPlayingMovies: null,
        popularMovies: null,
        trendingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state,action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies,addTrendingMovies,addUpcomingMovies, addTrailerVideo} = movieSlice.actions;
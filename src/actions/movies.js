import {
  FETCH_MOVIES,
  FETCH_GENRES,
  STATUS_START,
  STATUS_SUCCESS,
  SET_GENRE_FILTER,
  SET_RATING_FILTER
} from '../constants/actions'
import api from '../api';

export function fetchMovies() {
  return (dispatch) => {
    dispatch({
      type: FETCH_MOVIES,
      status: STATUS_START,
      payload: {},
    });

    api.getNowPlayingMovies().then(
      (response) => {
        dispatch({
          type: FETCH_MOVIES,
          status: STATUS_SUCCESS,
          payload: { results: response.data.results },
        });
      },
    );
  };
}

export function fetchGenres() {
  return (dispatch) => {
    dispatch({
      type: FETCH_GENRES,
      status: STATUS_START,
      payload: {},
    });

    api.getGenreList().then(
      (response) => {
        dispatch({
          type: FETCH_GENRES,
          status: STATUS_SUCCESS,
          payload: { results: response.data.genres },
        });
      },
    );
  };
}


export function setGenreFilter(genres = []) {
  return (dispatch) => {
    dispatch({
      type: SET_GENRE_FILTER,
      payload: {
        genres,
      },
    });
  };
}


export function setRatingFilter(rating) {
  return (dispatch) => {
    dispatch({
      type: SET_RATING_FILTER,
      payload: {
        rating,
      },
    });
  };
}

import {
  FETCH_MOVIES,
  STATUS_START,
  STATUS_SUCCESS,
  FETCH_GENRES,
} from '../constants/actions';

import { Genre, Movie } from '../models';

export const initialState = {
  moviesNowPlaying: {
    error: undefined,
    isPending: false,
    list: undefined,
  },
  genres: {
    error: undefined,
    genresByIds: undefined,
    isPending: false,
  },
}

export function store(state = initialState, action) {

  const { payload, status, type } = action;

  switch (type) {
    case FETCH_MOVIES:
      switch (status) {
        case STATUS_START: {
          return {
            ...state,
            moviesNowPlaying: {
              ...state.moviesNowPlaying,
              isPending: true,
              error: undefined,
            },
          };
        }
        case STATUS_SUCCESS: {
          return {
            ...state,
            moviesNowPlaying: {
              ...state.moviesNowPlaying,
              isPending: false,
              list: (payload.results || []).map(data => new Movie(data)),
            },
          };
        }
        
        default:
          return state;
      }

    case FETCH_GENRES:
      switch (status) {
        case STATUS_START: {

          return {
            ...state,
            genres: {
              ...state.genres,
              isPending: true,
              error: undefined,
            },
          };
        }
        case STATUS_SUCCESS: {
          const genresByIds = {};
          (payload.results || []).forEach(data => genresByIds[data.id] = new Genre(data));

          return {
            ...state,
            genres: {
              ...state.genres,
              isPending: false,
              genresByIds,
            },
          };
        }
        
        default:
          return state;
      }

    default:
      return state;
  }
}

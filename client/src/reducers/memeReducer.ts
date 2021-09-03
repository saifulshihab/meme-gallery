import { Reducer } from 'react';
import {
  CREATE_MEME_FAILED,
  CREATE_MEME_SUCCESS,
  DELETE_MEME_FAILED,
  DELETE_MEME_SUCCESS,
  GET_ALL_MEMES_FAILED,
  GET_ALL_MEMES_REQUEST,
  GET_ALL_MEMES_SUCCESS,
} from '../action/actionType';
import { MemeType } from '../types';

export const memeInitialState: MemeState = {
  loading: true,
  memes: [],
  error: null,
};

export interface MemeState {
  loading: boolean;
  memes?: MemeType[];
  error?: any;
}

export type ACTIONTYPE = { type: string; payload?: any };

export const memeReducer: Reducer<MemeState, ACTIONTYPE> = (
  state: MemeState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case GET_ALL_MEMES_REQUEST:
      return { loading: true };
    case GET_ALL_MEMES_SUCCESS:
      return { loading: false, memes: action.payload };
    case GET_ALL_MEMES_FAILED:
      return { loading: false, error: action.payload };
    case CREATE_MEME_SUCCESS:
      return {
        loading: false,
        memes: [action.payload, ...(state.memes || [])],
      };
    case CREATE_MEME_FAILED:
      return { loading: false, error: action.payload };
    case DELETE_MEME_SUCCESS:
      return {
        loading: false,
        memes: action.payload,
      };
    case DELETE_MEME_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

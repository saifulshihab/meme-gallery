import axios from 'axios';
import { baseURL } from '../baseURL';
import {
  CREATE_MEME_FAILED,
  CREATE_MEME_SUCCESS,
  DELETE_MEME_FAILED,
  DELETE_MEME_SUCCESS,
  GET_ALL_MEMES_FAILED,
  GET_ALL_MEMES_REQUEST,
  GET_ALL_MEMES_SUCCESS,
} from './actionType';

export const getAllMemes = async (dispatch: any) => {
  try {
    dispatch({
      type: GET_ALL_MEMES_REQUEST,
    });

    const { data } = await axios.get(baseURL + '/api/meme');

    dispatch({
      type: GET_ALL_MEMES_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_MEMES_FAILED,
      payload: error?.message,
    });
  }
};

export const createMeme = async (dispatch: any, body: any) => {
  try {
    const { data } = await axios.post(baseURL + '/api/meme', body);

    dispatch({
      type: CREATE_MEME_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: CREATE_MEME_FAILED,
      payload: error?.message,
    });
  }
};

export const deleteMeme = async (dispatch: any, memeId: string) => {
  try {
    const { data } = await axios.delete(baseURL + `/api/meme/${memeId}`);

    dispatch({
      type: DELETE_MEME_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: DELETE_MEME_FAILED,
      payload: error?.message,
    });
  }
};

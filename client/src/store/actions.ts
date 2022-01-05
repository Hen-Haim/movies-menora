import { MovieExtendedModel } from './../Models/MovieModel';
import axios from "axios";
import { AllActionType } from "../Models/ActionsType";
import { Dispatch } from "redux";
import { MovieModel } from "../Models/MovieModel";


export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  dispatch({
    type: AllActionType.MSG,
    payload: message,
  });
};

export const emptyModal = () => async (dispatch: Dispatch) => {
  dispatch({
    type: AllActionType.CLEAR_UP_MODAL,
    payload: {},
  });
};

export const emptyMovies = () => async (dispatch: Dispatch) => {
    dispatch({
      type: AllActionType.CLEAR_UP_MOVIES,
    });
};


export const getTenMovies = () => async (dispatch: Dispatch) => {
  const moviesArray = ["tt0451279", "tt2948372", "tt3631112", "tt11286314", "tt8579674", "tt12298506", "tt11274100", "tt3846674", "tt6841122", "tt7737786"]
  for( let i=0; i<10; i++){
    try {
      const response = await axios.get<MovieModel>(
        `http://localhost:3001/movies/ten-movies/${moviesArray[i]}`
      );
      dispatch({
        type: AllActionType.MOVIES,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: AllActionType.MSG,
        payload: error.message,
      });
    }
  }
};

export const homeCardDescription = (movieId?: string) => async (dispatch: Dispatch) => {
  movieId === undefined && (movieId = "tt0451279");
  try {
    const response = await axios.get<MovieModel>(
      `http://localhost:3001/movies/home-card/${movieId}`
    );
    dispatch({
      type: AllActionType.MOVIE_HOME_CARD,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};

export const SearchExtendedDescription = (searchChosenMovie: string) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<MovieExtendedModel>(
        `http://localhost:3001/movies/search-card/${searchChosenMovie}`
      );
      dispatch({
        type: AllActionType.MOVIE_SEARCH_CARD,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: AllActionType.MSG,
        payload: error.message,
      });
    }
};

export const ModalDetailsDescription = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<MovieExtendedModel>(
      `http://localhost:3001/movies/modal/${id}`
    );
    dispatch({
      type: AllActionType.MODAL,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};

export const movieChosenFromSearchComp = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<MovieExtendedModel>(
      `http://localhost:3001/movies/modal/${id}`
    );
    dispatch({
      type: AllActionType.MOVIE_SEARCH_CARD,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};




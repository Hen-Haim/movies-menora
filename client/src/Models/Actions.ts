import { AllActionType } from "./ActionsType";
import { MovieExtendedModel, MovieModel } from "./MovieModel";


interface MSG {
  type: AllActionType.MSG;
  payload: string;
}

interface MOVIES {
  type: AllActionType.MOVIES;
  payload: MovieModel;
}

interface CLEAR_UP_MOVIES {
  type: AllActionType.CLEAR_UP_MOVIES;
}

interface MOVIE_HOME_CARD {
  type: AllActionType.MOVIE_HOME_CARD;
  payload: MovieModel;
}

interface MOVIE_SEARCH_CARD {
  type: AllActionType.MOVIE_SEARCH_CARD;
  payload: MovieExtendedModel;
}

interface MODAL {
  type: AllActionType.MODAL;
  payload: MovieExtendedModel;
}

interface CLEAR_UP_MODAL {
  type: AllActionType.CLEAR_UP_MODAL;
}

export type Actions =
  | MSG
  | MOVIES
  | MOVIE_HOME_CARD
  | CLEAR_UP_MOVIES
  | MODAL
  | CLEAR_UP_MODAL
  | MOVIE_SEARCH_CARD;

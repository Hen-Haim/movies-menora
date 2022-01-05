import { MovieExtendedModel } from './../Models/MovieModel';
import { Actions } from "../Models/Actions";
import { AllActionType } from "../Models/ActionsType";
import { MovieModel } from "../Models/MovieModel";

export interface StateType {
  msg: string;
  chosenMovies: MovieModel[];
  homeChosenMovie: MovieModel ;
  searchChosenMovie: MovieExtendedModel;
  modalDetails: MovieExtendedModel
}

let newState: StateType = {
  msg: "",
  chosenMovies: [],
  homeChosenMovie: {},
  searchChosenMovie: {},
  modalDetails: {}
};

const reducer = (state: StateType = newState, action: Actions): StateType => {
  switch (action.type) {
    case AllActionType.MSG:
      return {
        ...state,
        msg: action.payload,
      };      
    case AllActionType.MOVIES:
      return {
        ...state,
        chosenMovies: [...state.chosenMovies, action.payload],
        msg: "",
      };
    case AllActionType.CLEAR_UP_MOVIES:
      return {
        ...state,
        chosenMovies: [],
        msg: "",
      };
    case AllActionType.MOVIE_HOME_CARD:
      return {
        ...state,
        homeChosenMovie: action.payload,
        msg: "",
      };
    case AllActionType.MOVIE_SEARCH_CARD:
      return {
        ...state,
        searchChosenMovie: action.payload,
        msg: "",
      };
    case AllActionType.MODAL:
      return {
        ...state,
        modalDetails: action.payload,
        msg: "",
      };
    case AllActionType.CLEAR_UP_MODAL:
      return {
        ...state,
        modalDetails: {},
        msg: "",
      };
    default:
      return state;
  }
};

export default reducer;

import "./HomeCard.css";
import { MovieModel } from "../../../Models/MovieModel";
import { useDispatch } from "react-redux";
import {
  homeCardDescription,
  ModalDetailsDescription,
} from "../../../store/actions";

export const HomeCard = (props: { movie?: MovieModel }) => {
  const dispatch = useDispatch();

  const ClickedMovie = () => {
    dispatch(homeCardDescription(props.movie?.imdbID));
    dispatch(ModalDetailsDescription(props.movie?.imdbID));
  };

  return (
    <div onClick={ClickedMovie} className="home-card">
      <img
        className="home-card-img"
        src={props.movie?.Poster}
        alt="home card movie poster"
      ></img>
    </div>
  );
};

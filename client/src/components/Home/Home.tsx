import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { emptyMovies, getTenMovies, homeCardDescription, ModalDetailsDescription, sendMessage } from "../../store/actions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { HomeCard } from "./HomeCards/HomeCard";
import { MovieModel } from "../../Models/MovieModel";


export const Home = () => {
  const dispatch = useDispatch();
  const chosenMovies = useSelector((state: RootStateOrAny) => state.chosenMovies);
  const homeChosenMovie = useSelector((state: RootStateOrAny) => state.homeChosenMovie);
  const modalChosenMovie = useSelector((state: RootStateOrAny) => state.modalDetails);

  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const triggeringModalRef = useRef<any>(null);

  useEffect(() => {
    dispatch(emptyMovies())
    dispatch(sendMessage("")); 
    dispatch(homeCardDescription("tt0451279"));
    dispatch(getTenMovies()); 
  }, []);

  const moreDetails = ()=>{
    dispatch(ModalDetailsDescription(homeChosenMovie.imdbID));
    setIsTriggered(true);
  }

  useEffect(() => {
    if (isTriggered && Object.keys(modalChosenMovie).length !== 0) {
      triggeringModalRef?.current?.click();
      return setIsTriggered(false)        
    }
}, [modalChosenMovie, isTriggered])

  return (
    <div className="home">
      <div>
        <div className="header-home">
          <h1>
            Movies
          </h1>
          <h1>
            Project
          </h1>          
        </div>
        <div className="header-description">
          <h4> Using:
          </h4>
          <h5>- www.omdbapi.com API</h5>
          <h5>- React, React Hooks </h5>
          <h5>- Typescript, Javascript </h5>
          <h5>- Redux </h5>            
        </div>
      </div>
      <div>
        {homeChosenMovie && 
        <div className="home-card-description">
          <div className="description-div">
            <h3>{homeChosenMovie.Title}</h3>
            <h6>{homeChosenMovie.Plot}</h6>
            <div className="last-sentence">
              <h5><span>Rate: &nbsp;&nbsp;</span>{homeChosenMovie.imdbRating}</h5>
              <button onClick = {moreDetails}  type="button" data-bs-toggle="modal" ref={triggeringModalRef}
                  data-bs-target={`#${modalChosenMovie.imdbID}`} className="btn btn-outline-light my-btn-modal">More Details
              </button>              
            </div>
          </div>
          <div>
            <img className="home-img" src={homeChosenMovie.Poster} alt = "chosen movie poster"></img>
          </div>
        </div>}         
        <div className="home-cards">
          {chosenMovies?.map((movie: MovieModel, index: number) => {
          return <HomeCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

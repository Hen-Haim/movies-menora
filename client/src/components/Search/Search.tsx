import "./Search.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { movieChosenFromSearchComp, sendMessage } from "../../store/actions";
import { useCookies } from 'react-cookie';
import logoPic from "../../assets/no-search.jpg";
import { MovieModel } from "../../Models/MovieModel";


export const Search = () => {
  const searchChosenMovie = useSelector((state: RootStateOrAny) => state.searchChosenMovie);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['userMovies']);

  const getCookies = () =>{
    let myCookie = cookies.userMovies;
    let check = false;
    if(Object.keys(searchChosenMovie).length !== 0 && myCookie !== undefined && myCookie !== null && myCookie.length !== 0){
      for(let i = 0; i< myCookie.length ; i++){
        if(myCookie[i].imdbID === searchChosenMovie.imdbID){
          check = true;
          myCookie.splice(i,1);
          myCookie.unshift({imdbID: searchChosenMovie.imdbID, Poster: searchChosenMovie.Poster})
        }
      }
    }else if(myCookie === undefined || myCookie === null){
      setCookie('userMovies', [], { path: '/' });
      myCookie = [];
    }
    if(check === false && Object.keys(searchChosenMovie).length !== 0){
      myCookie.unshift({imdbID: searchChosenMovie.imdbID, Poster: searchChosenMovie.Poster})
    }
    let shorterArray = myCookie.slice(0, 5)
    setCookie('userMovies', JSON.stringify(shorterArray), { path: '/' });
  }

  const detailsOfClickedMovie = (movieClickedId: string | undefined)=>{
    if(movieClickedId !== undefined){
     dispatch(movieChosenFromSearchComp(movieClickedId))
    }
  }
  
  useEffect(() => {
    dispatch(sendMessage("")); 
  }, []);

  useEffect(() => {
    getCookies()
  }, [searchChosenMovie]);

  return (
    <div className="search">
      <div className="search-cards">
        {cookies.userMovies && cookies.userMovies.length !== 0 && <div className="cookies-results">
          <h4>Your Latests Search: </h4>
          <div>
            {cookies.userMovies?.map((movie: MovieModel, index: number) => {
            return <img key={index} className="cookie-card-img" alt = "history movie search" src={movie?.Poster} onClick={()=>detailsOfClickedMovie(movie.imdbID)}></img>         ;
            })}
          </div>
        </div>}
        { Object.keys(searchChosenMovie).length === 0 ? 
        <div className="search-results-container">
          <img className="search-card-img" src= {logoPic} alt = "no search results"></img>
        </div>
        :
        <div className="search-results-container">
          <img className="search-card-img" src={searchChosenMovie.Poster} alt = "search result movie poster"></img>
          <div className="search-card-description">
            <h3>{searchChosenMovie.Title}</h3>
            <h5><span>Plot: &nbsp;&nbsp;</span>{searchChosenMovie.Plot}</h5>
            <h5><span>Genre: &nbsp;&nbsp;</span> {searchChosenMovie?.Genre}</h5>
            <h5><span>Actors:  &nbsp;&nbsp;</span>  {searchChosenMovie?.Actors}</h5>
            <h5><span>Language:  &nbsp;&nbsp;</span>  {searchChosenMovie?.Language}</h5>
            <h5><span>Country:  &nbsp;&nbsp;</span>  {searchChosenMovie?.Country}</h5>
          </div>
        </div>}        
      </div>
    </div>
  );
};

import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Link } from "react-router-dom";
import logoPic from "./assets/main-pic.jpg";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchExtendedDescription } from "./store/actions";
import PopUpModel from "./components/Main/PopUpModal/PopUpModal";


function App() {
  const msg = useSelector((state: RootStateOrAny) => state.msg);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [searchState, setSearchState] = useState("");
  const dispatch = useDispatch();
  const pathRef = useRef<any>(null);

  const searching = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(SearchExtendedDescription(searchState));
    pathRef?.current?.click();
  };

  const imgStyle = (path: string) => {
    if (currentPath === path) {
      return "#ff008c";
    }
    return "rgba(0, 174, 255, 0.589)";
  };

  useEffect(() => {
    return setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <BrowserRouter>
      <div className="app dark">

        <header>
          <div className="header-div-app">
            <img src={logoPic} alt="logo" className="logo" />
            <h1> My<span>Movie</span>Guide </h1>
          </div>
          <form className="div-for-search">
              <div className="input-group my-input-group">
                <input className="form-control my-form-control" type="search" onChange={(e) => setSearchState(e.target.value)}
                  placeholder="Search" aria-label="Search" />
              </div>
              <button onClick={(e) => searching(e)} className="btn btn-outline-light my-search-btn" type="submit" >
                <FontAwesomeIcon icon={faSearch} className="search-icon"/>
              </button>
          </form>         
          <div className="nav">
            <Link onClick={() => setCurrentPath("/home")} to="/home" style={{ color: imgStyle("/home") }} > Home </Link>
            <Link onClick={() => setCurrentPath("/search")} to="/search" style={{ color: imgStyle("/search") }} 
            ref={pathRef} > Search </Link>
          </div>
        </header>

        <main> <Main /> </main>

        <footer> <p>@HenHaim</p> </footer>

        <section style={{ display: msg !== "" ? "block" : "none" }}> {msg} </section>

        <PopUpModel />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./Main.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from '../Home/Home';
import { Search } from '../Search/Search';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Main = () => {
    return (
        <>
            <Route render={({location})=>(
                <TransitionGroup className="TransitionGroup">
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/home"><Home /></Route>
                            <Route exact path="/search"><Search /></Route>
                            <Redirect from="/" to="/home" exact />
                            <Route><Home /></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>            
        </>
    )
}

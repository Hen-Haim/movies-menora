import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from "./store/Store";
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}> 
      <App/>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

reportWebVitals();

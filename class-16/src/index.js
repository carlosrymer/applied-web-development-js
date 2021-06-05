import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Switch,
	Route
} from 'react-router-dom'; // npm install react-router-dom --save
import { Provider } from 'react-redux';
import './index.css';
import Home from './Home';
import Results from './Results';
import NoMatch from './NoMatch';
import createHistory from 'history/createBrowserHistory';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
	  	<Router history={createHistory()}>
		    <Switch>
		      <Route exact path="/">
		        <Home />
		      </Route>
		      <Route exact path="/results" component={Results} />
		      <Route>
		        <NoMatch />
		      </Route>
		    </Switch>
		</Router>
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

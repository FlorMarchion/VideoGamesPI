//Esta es la app es sí misma

import './App.css';
// import Home from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home.jsx';
import Details from './components/Details.jsx';
import CreateGame from './components/CreateGame';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllVideoGames } from './actions/index.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideoGames());
  }, [dispatch]);



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/videogame/:id" component={Details} />
          <Route exact path="/createGame" component={CreateGame} />
          {/* <Route exact path="/genres" component={CreateGame} /> */}
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;

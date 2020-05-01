import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'


function App() {
  return (
    <div className="App">
      <div>
        
      </div>
      <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/movie/:imdb_id" component={MoviePage} />
          <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
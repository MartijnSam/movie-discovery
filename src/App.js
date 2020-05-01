import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <div>
        
      </div>
      <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/discover" component={DiscoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
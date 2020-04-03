
// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import SecureNavBar from "./components/SecureNavBar";
import { useAuth0 } from "./react-auth0-spa";
import './index.css'


// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";

import Profile from "./components/pages/Profile";
import Home from './components/pages/Home';
import Photos from './components/pages/Photos';
import PublicHome from './components/pages/PublicHome';
import HomeDebug from './components/pages/HomeDebug';
import Calendar from './components/pages/Calendar';
import DumbHome from './components/pages/DumbHome';
import DumbPhotos from './components/pages/DumbPhotos';
import NewsPage from './components/pages/NewsPage';
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboveHeader from './components/AboveHeader.js';
import Carousel from './components/pages/Carousel.js';
import Loading from './components/Loading.js';
import List from './components/List.js';
import List2 from './components/List2.js';

function App() {
  const { loading, user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  

  const debugging=true;

  if (!debugging&&loading) {
    return <Loading />;
  }
  
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
      <AboveHeader />
        <header>
          {!isAuthenticated && <NavBar />}
          {isAuthenticated && <SecureNavBar />}

        </header>

        {/* <Route exact path="/" component={Home} />
        <Route exact path="/photos" component={Photos} /> */}
        {/* Switch the below line to PublicHome for production */}
        {!isAuthenticated && <Route exact path="/" component={HomeDebug} />}
        {!isAuthenticated && <Route exact path="/list" component={List} />}
        {!isAuthenticated && <Route exact path="/list2" component={List2} />}
        {!isAuthenticated && <Route exact path="/newspage" component={NewsPage} />}
        {isAuthenticated && <Route exact path="/" component={Home} />}
        {isAuthenticated && <Route exact path="/photos" component={Photos} />}
        {isAuthenticated && <Route exact path="/calendar" component={Calendar} />}
        {isAuthenticated && <Route exact path="/profile" component={Profile} />}
        {isAuthenticated && <Route exact path="/carousel" component={Carousel} />}
        


      </Router>


    </div>
  );
}

export default App;



        // <Switch>
        //   <Route path="/" exact />
        //   {/* <Route path="/profile" component={Profile} /> */}
        //   <PrivateRoute path="/profile" component={Profile} />
        //   <PrivateRoute path="/home" component={DumbHome} />
        //   {/* <PageContent /> */}
        // </Switch>


    
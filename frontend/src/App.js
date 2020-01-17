import React from 'react';

import './App.css';

import Reviews from './containers/Reviews/Reviews';
import { Route, Switch, Redirect } from "react-router-dom"
import TopRated from './components/TopRated/TopRated';
import Search from './components/Search/Search';
import Layout from './components/Layout/Layout';
import Genre from './components/Genre/Genre';

const App = () => {
  return (
    <div className="App">

      <Layout>
        <Switch>

          <Route path='/' exact component={Reviews} />





          <Route path='/toprated' component={TopRated} />
          <Route path='/search' component={Search} />

          <Route path='/genre' component={Genre} />







          <Redirect to="/" />


        </Switch>
      </Layout>
    </div>
  );
}

export default App;

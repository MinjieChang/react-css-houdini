import React from 'react';
import {Link, Switch, Route, Router} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';

import HoudiniHome from './components/HoudiniHome'
import PropertyValue from './use/usePropertyValueApi'
import PaintApi from './use/usePaintingApi'

const defaultHistory = createBrowserHistory();



function App() {
  return (
    <div className="container">
      {/* <div className="App"></div> */}
      <Router history={defaultHistory}>
        <div><Link to={`/`}>home</Link></div>
        <div><Link to={`/useHoudini`}>useHoudini</Link></div>
        <div><Link to={`/propertyValye`}>propertyValye</Link></div>
        <div><Link to={`/paint`}>paint</Link></div>
        <Switch>
          <Route exact path={`/`} component={() => <div className="App"></div>}></Route>
          <Route exact path={`/useHoudini`} component={() => <HoudiniHome></HoudiniHome>}></Route>
          <Route exact path={`/propertyValye`} component={() => <PropertyValue />}></Route>
          <Route exact path={`/paint`} component={() => <PaintApi></PaintApi>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

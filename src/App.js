import React from 'react';
import {Link, Switch, Route, HashRouter as Router} from 'react-router-dom'
import { createHashHistory } from 'history';
import './App.css';

import HoudiniHome from './components/HoudiniHome'
import PropertyValue from './use/usePropertyValueApi'
import PaintApi from './use/usePaintingApi'
import LayoutApi from './use/useLayoutApi'

const defaultHistory = createHashHistory();



function App() {
  return (
    <div className="container">
      <Router history={defaultHistory}>
        <ul>
          <li>Properties and values</li>
          <ul>
            <li><div><Link to={`/`}>home</Link></div></li>
            <li><div><Link to={`/useHoudini`}>useHoudini</Link></div></li>
            <li><div><Link to={`/propertyValye`}>propertyValye</Link></div></li>
          </ul>
          <li>paint worklet</li>
          <ul>
            <li><div><Link to={`/paint`}>paint</Link></div></li>
          </ul>
          <li>layout worklet</li>
          <ul>
            <li><div><Link to={`/layout`}>layout</Link></div></li>
          </ul>
        </ul>
        <Switch>
          <Route exact path={`/`} component={() => <div className="App">i want get random width when refresh</div>}></Route>
          <Route exact path={`/useHoudini`} component={() => <HoudiniHome></HoudiniHome>}></Route>
          <Route exact path={`/propertyValye`} component={() => <PropertyValue />}></Route>
          <Route exact path={`/paint`} component={() => <PaintApi></PaintApi>}></Route>
          <Route exact path={`/layout`} component={() => <LayoutApi></LayoutApi>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

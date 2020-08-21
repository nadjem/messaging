import React, { useEffect } from 'react';
//import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RootChat from './component/components/RootChat';
import Login from './component/components/Login/Login'
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js';
function App() {
  useEffect(() => {
    M.AutoInit();
  },[])
  return (
    <Router>
    <div className="App">
    <Switch>
          <Route exact path='/tchat'>
            <RootChat />
          </Route>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route>Error 404</Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;

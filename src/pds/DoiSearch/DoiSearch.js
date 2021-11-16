import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Search from './Search';

const DoiSearch = (props) => {
  return <HashRouter>
    <Switch>
      <Route 
        path="/search/:searchText+"
        render={(renderProps) => (
          <Search {...renderProps} showActions={props.showActions} store={props.store} api={props.api}/>
        )}
      />
      <Route path="/search/"
        render={(renderProps) => (
          <Search {...renderProps} showActions={props.showActions} store={props.store} api={props.api}/>
        )}
      />
      <Route path="/">
          <Redirect to="/search"/>
      </Route>
    </Switch>
  </HashRouter>
}
  
export default DoiSearch;
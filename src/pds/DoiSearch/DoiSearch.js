import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Search from './Search';

const DoiSearch = (props) => {

  return <div>
    {props.useClientRouter?
      <div>
        doiSearch with no router
        <Search {...props} useClientRouter={props.useClientRouter} history={props.history} searchText={props.searchText} showActions={props.showActions} store={props.store} api={props.api}/>
      </div>
      :
      <div>
         doiSearch with own router
        <HashRouter>
          <Switch>
            <Route
              path="/search/:searchText+"
              render={(renderProps) => (
                <Search {...renderProps}  useClientRouter={false} showActions={props.showActions} store={props.store} api={props.api}/>
              )}
            />
            <Route path="/search/"
              render={(renderProps) => (
                <Search {...renderProps} useClientRouter={false} store={props.store} api={props.api}/>
              )}
            />
            <Route path="/">
                <Redirect to="/search"/>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    }
  </div>
  
}
  
export default DoiSearch;
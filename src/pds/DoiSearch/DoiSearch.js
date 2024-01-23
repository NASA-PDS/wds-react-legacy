import React from 'react'
import ExternalRouterSearch from './ExternalRouterSearch';
import InternalRouterSearch from './InternalRouterSearch';
import { HashRouter, Redirect, Route, Routes } from 'react-router-dom';

const DoiSearch = (props) => {
  return (<div>
    {props.useClientRouter?
        <ExternalRouterSearch
          useClientRouter={props.useClientRouter} 
          history={props.history} 
          params={props.params}
          showActions={props.showActions} 
          store={props.store} 
          api={props.api}
        />
        :
        <HashRouter>
          <Routes>
            <Route
              path="/search/:searchText+"
              render={(renderProps) => (
                <InternalRouterSearch 
                  showActions={props.showActions} 
                  store={props.store} 
                  api={props.api}
                />
              )}
            />
            <Route path="/search/"
              render={(renderProps) => (
                <InternalRouterSearch
                  showActions={props.showActions} 
                  store={props.store} 
                  api={props.api}
                />
              )}
            />
            <Route path="/">
                <Redirect to="/search"/>
            </Route>
          </Routes>
        </HashRouter>
    }
  </div>
  )
}
  
export default DoiSearch;
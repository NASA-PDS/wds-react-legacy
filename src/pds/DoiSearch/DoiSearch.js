import React from 'react'
import ExternalRouterSearch from './ExternalRouterSearch';
import InternalRouterSearch from './InternalRouterSearch';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

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
              path="/search/:searchText"
              element={
                <InternalRouterSearch 
                  showActions={props.showActions} 
                  store={props.store} 
                  api={props.api}
                />
              }
            />
            <Route
              path="/search/"
              element={
                <InternalRouterSearch
                  showActions={props.showActions} 
                  store={props.store} 
                  api={props.api}
                />
              }
            />
            <Route path="/" element={<Navigate to="/search/" />} />
          </Routes>
        </HashRouter>
    }
  </div>
  )
}
  
export default DoiSearch;
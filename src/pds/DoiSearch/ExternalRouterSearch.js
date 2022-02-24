import React from 'react'
import Search from './Search';

const ExternalRouterSearch = (props) => {
    return(
      <Search
          history={props.history} 
          params={props.params}
          showActions={props.showActions} 
          store={props.store} 
          api={props.api}
      />
  )
}
  
export default ExternalRouterSearch;
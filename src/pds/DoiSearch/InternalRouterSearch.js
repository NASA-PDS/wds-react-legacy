import React from 'react'
import Search from './Search';
import { useHistory, useParams } from 'react-router-dom'

const InternalRouterSearch = (props) => {  
    let history = useHistory();
    let params = useParams();

    return(
        <Search
            history={history} 
            params={params}
            showActions={props.showActions} 
            store={props.store} 
            api={props.api}
        />
    )
}
  
export default InternalRouterSearch;
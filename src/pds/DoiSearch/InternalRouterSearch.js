import React from 'react'
import Search from './Search';
import { useNavigate, useParams } from 'react-router-dom'

const InternalRouterSearch = (props) => {  
    const navigate = useNavigate();
    let params = useParams();

    return(
        <Search
            navigate={navigate} 
            params={params}
            showActions={props.showActions} 
            store={props.store} 
            api={props.api}
        />
    )
}
  
export default InternalRouterSearch;
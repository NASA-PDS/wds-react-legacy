import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Home from './Home'
import Main from './Main'

const Body = () => {
    return <div>
            <Switch>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/main/:nameText'>
                    <Main/>
                </Route>
                <Route path='/main'>
                    <Main/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
    </div>
  }
  
  export default Body
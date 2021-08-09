import React, {useEffect} from 'react';
import Comp from './Comp'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import rootActions from "../actions/rootActions";
import {useParams} from 'react-router-dom';


const Main = () => {
    let { nameText } = useParams();
    const dispatch = useDispatch();

    const name =  useSelector(state => {
        return state.appReducer.name;
    });

    useEffect(() => {
        if(nameText){
            dispatch(rootActions.appAction.setName(nameText));
        }
    }, [nameText]);
    

    return <Container>
        <Typography>Main!</Typography>
        <Comp/>
        <p>Name: {name}</p>
    </Container>
  }
  
  export default Main
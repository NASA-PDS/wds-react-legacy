import React from 'react'
import {Button } from '@material-ui/core';
import rootActions from "../actions/rootActions";
import {useDispatch} from "react-redux";

const Comp = () => {
  const dispatch = useDispatch();

  const handleBtnClk = () => {
    dispatch(rootActions.appAction.setName('boton cicked'));
  };

  return <Button variant="outlined" color="primary"  onClick={handleBtnClk}>Comp Button!</Button>
}
  
  export default Comp
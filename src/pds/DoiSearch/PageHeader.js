import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  alignLeft: {
    textAlign: 'left',
    alignSelf: 'flex-start'
  }
}));

const PageHeader = (props) => {
  const classes = useStyles();
  
  return (
      <div className={classes.alignLeft}>
        <Typography variant="h4" component="h1">{props.header}</Typography>
        {props.text && <Typography variant="subtitle1" gutterBottom>{props.text}</Typography>}
      </div>
  );
};
 
export default PageHeader;

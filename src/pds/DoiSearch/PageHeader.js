import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  alignLeft: {
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  fullWidth: {
    maxWidth: '100%'
  }
}));


const PageHeader = (props) => {
  const classes = useStyles();
  
  return (
      <div className={classes.alignLeft}>
        <Typography variant="h4" component="h1">{props.header}</Typography>
        <Typography variant="body1" className={classes.fullWidth}>
          Search for a DOI or PDS Data Set, Bundle, Collection, or Document products using a DOI or PDS LID, LIDVID, or PDS3 Data Set ID. 
        </Typography>
        <Typography variant="body1" className={classes.fullWidth}>
            See the <Link href="/datastandards/citing/" target="_blank" rel="noopener">Citing PDS</Link> Data page for more information on how to use these DOIs to cite PDS data.
        </Typography>
        <br/>
        <Typography variant="body1" className={classes.fullWidth} gutterBottom>
          <i>Trouble finding what you are looking for? Please contact the <Link href="https://pds-gamma.jpl.nasa.gov/tools/doi/?feedback=true">PDS Operator</Link> for assistance.</i>
        </Typography>
      </div>
  );
};
 
export default PageHeader;

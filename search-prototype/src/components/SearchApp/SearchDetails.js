import React from 'react';
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const Breadcrumbs = () => {
    const searchResults = useSelector((state) => state.app.searchResults);
    const dataTypeText = useSelector((state) => state.app.dataTypeText);
    
    const getResultsLabel = (results) => {
        let start = results.summary.start + 1;
        let listNum = results.data.length;
        let end = start + listNum - 1;
        let hits = results.summary.hits;

        return start + ' - ' + end + ' of ' + hits  + ' results';
    }

    const getTookSeconds = (summary) => {
        return summary.took/1000;
    }

    return (
        <div>
            {searchResults.data?
                <div>
                    <Typography variant="h4" display="inline">
                        Showing
                    </Typography> 
                    <Typography variant="h4" display="inline" sx={{color:'#1b66e3'}}>
                        {dataTypeText}
                    </Typography> 
                    <br/>
                    <Typography variant="h4" display="inline">
                        for
                    </Typography> 
                    <Typography variant="h4" display="inline" sx={{color:'#1b66e3'}}>
                        {searchResults.summary.searchText}
                    </Typography>
                    <br/>
                    <Typography variant="body1" display="inline">
                        {getResultsLabel(searchResults)} ({getTookSeconds(searchResults.summary)} seconds)
                    </Typography>
                </div>
                :
                ''
            }
        </div>
    );
}

export default Breadcrumbs;
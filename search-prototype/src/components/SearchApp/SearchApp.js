import React, { useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { setSearchText } from "../../store/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from '../../store/AppSlice';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '../Card/Card';
import TextField from '../TextField/TextField';
import FeaturedLinkListItem from '../FeaturedLinkListItem/FeaturedLinkListItem';

const SearchApp = () => {
  let showCard = false;

  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  
  const searchText = useSelector((state) => state.app.searchText);
  const searchResults = useSelector((state) => state.app.searchResults);

  const handleSearchTextChanged = (e) => {
    dispatch(setSearchText(e.target.value));
  }

  const onSearchClicked = async () => {
    try {
      setAddRequestStatus('pending');
      await dispatch(getSearchResults(searchText)).unwrap();
    } catch (err) {
      console.error('Failed to save the post: ', err);
    } finally {
      setAddRequestStatus('idle');
    }
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSearchClicked();
    }
  }
  
  return (
    <div className="App">

      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Search Results
          </Link>
        </Breadcrumbs>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <p>Showing ____ for _____</p>
            <p>facets list goes here:</p>
          </Grid>
          <Grid xs={9}>
            <TextField
              id="outlined-start-adornment2"
              placeholder="Search PDS"
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
              }}
              onChange={handleSearchTextChanged}
              onKeyDown={handleKeyDown}
              value={searchText}
            />

            <p>sorting buttons go here</p>
            
            <div>
              {showCard? 
                <Card/>
                :
                ""
              }

              <p>
                This is the search text: {JSON.stringify(searchText)}
              </p>

              <Paper elevation={0}>
                
              {searchResults.data?
                <div>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid xs={9}>
                        <Typography>Result</Typography>
                      </Grid>
                      <Grid xs={3}>
                        <Typography>Category</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  {searchResults.data.map((result, index) => (
                    <FeaturedLinkListItem key={index} result={result}/>
                  ))}
                </div>
                :
                ""
              }
              </Paper>
              

              <p>Search Response: {JSON.stringify(searchResults)}</p>

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
                
              </p>
              
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SearchApp;
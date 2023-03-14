import React, { useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { setSearchText, setDataTypeValue } from "../../store/AppSlice";
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
import Sorting from './Sorting';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';

const SearchApp = () => {
  let showCard = false;

  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  
  const searchText = useSelector((state) => state.app.searchText);
  const searchResults = useSelector((state) => state.app.searchResults);
  const dataTypeValue = useSelector((state) => state.app.dataTypeValue);
  const dataTypeText = useSelector((state) => state.app.dataTypeText);
  const currstate = useSelector((state) => state);

  const handleSearchTextChanged = (e) => {
    dispatch(setSearchText(e.target.value));
  }

  const onSearchClicked = async () => {
    try {
      setAddRequestStatus('pending');
      await dispatch(getSearchResults()).unwrap();
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

  const handleTabChange = (event, newValue) => {
    dispatch(setDataTypeValue(newValue));
    onSearchClicked();
  };
  
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
            <p>Showing {dataTypeText} for {searchText}</p>
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


            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={dataTypeValue} onChange={handleTabChange} aria-label="data type tabs">
                  <Tab label="Everything" sx={{textTransform: 'none'}}/>
                  <Tab label="Data" sx={{textTransform: 'none'}}/>
                  <Tab label="Documents" sx={{textTransform: 'none'}}/>
                  <Tab label="Tools" sx={{textTransform: 'none'}}/>
                </Tabs>
              </Box>
              
            </Box>
            <Sorting/>
            
            <div>
              {showCard? 
                <Card/>
                :
                ""
              }

              {addRequestStatus === 'idle'?
                <div>
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
                :
                <CircularProgress />
              }
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SearchApp;
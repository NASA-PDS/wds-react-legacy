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
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import IconButton from '@mui/material/IconButton';
import Tag from '../Tag/Tag';
import Card from '../Card/Card';
import TextField from '../TextField/TextField';

const SearchApp = () => {
  let showCard = false;

  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const [resultDetailsClickedIndex, setResultDetailsClickedIndex] = useState({});

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
      setResultDetailsClickedIndex({});
    }
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSearchClicked();
    }
  }

  const handleResultDetailsClick = (index) => () => {
    setResultDetailsClickedIndex(state => ({
      ...state,
      [index]: !state[index]
    }));
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
                    <Box key={index}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid xs={1}>
                          <IconButton aria-label="arrow" onClick={handleResultDetailsClick(index)}>
                            <StarsIcon />
                          </IconButton>
                        </Grid>
                        <Grid xs={8}>
                          <Stack alignItems="left" gap={1}>
                            <Typography variant="subtitle2" display="inline">
                              {result.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid xs={2}>
                          <Typography variant="body1" display="block" color='red'>
                            DATA*
                          </Typography>
                        </Grid>
                        <Grid xs={1}>
                          <IconButton aria-label="arrow" color="red">
                            <StarsIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                      {resultDetailsClickedIndex[index]?
                        <Grid 
                          container 
                          spacing={2} 
                          alignItems="center" 
                          sx={{
                            background:'#F6F6F6',
                            margin: 0
                          }}
                        >
                          <Grid xs={1}>
                          </Grid>
                          <Grid xs={11}>
                            <Typography>Search or browse for data and science information from the Mars Science Laboratory Rover Curiosity*</Typography>
                            <Stack direction="row" alignItems="center" gap={1}>
                              <Typography>Tags*</Typography>
                              <Tag label="PDS3" color="primary" variant="outlined"/>
                              <Tag label="Analysis" color="primary" variant="outlined"/>
                              <Tag label="Search" color="primary" variant="outlined"/>
                              <Tag label="Dissemination" color="primary" variant="outlined"/>
                              <Tag label="GUI" color="primary" variant="outlined"/>
                            </Stack>
                          </Grid>
                        </Grid>
                        :
                        ""
                      }
                      <Divider/>
                    </Box>
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
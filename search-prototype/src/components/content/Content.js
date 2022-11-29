import React, { useState } from 'react';
import logo from '../../logo.svg';
import testImage from '../../nasaTest.jpeg';
import '../../App.css';
import TextField from '@mui/material/TextField';
import { setSearchText } from "../../store/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from '../../store/AppSlice';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EastIcon from '@mui/icons-material/East';
import Badge from '@mui/material/Badge';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.pdsTextField.rootBorder,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.pdsTextField.rootBorder,
      borderRadius: '2px'
    },
    '&:hover fieldset': {
      borderColor: theme.pdsTextField.hoverBorder,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.pdsTextField.focusBorder,
    },
    input: {
      padding: '14px 16px',
      paddingLeft: 0
    },
    label: {
    },
    '& .MuiInputAdornment-root': {
      color: theme.pdsTextField.iconColor
    }
  }
}));

const Content = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const [isCardHovered, setIsCardHovered] = useState(false);

  const dispatch = useDispatch();
  let show = false;

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

  const onCardMouseOver = () => {
    setIsCardHovered(true);
  }
  const onCardMouseOut = () => {
    setIsCardHovered(false);
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
          <Grid xs={4}>
            <p>Showing ____ for _____</p>
            <p>facets list goes here:</p>
          </Grid>
          <Grid xs={8}>

            <CustomTextField
              id="outlined-start-adornment2"
              placeholder="Search PDS"
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
              }}
              onChange={handleSearchTextChanged}
              onKeyDown={handleKeyDown}
              value={searchText}
              fullWidth
            />

            <p>sorting buttons</p>
            <div>
              {show? 
                <Card 
                  onMouseOver={onCardMouseOver} 
                  onMouseOut={onCardMouseOut} 
                  sx={{ 
                    maxWidth: 345, 
                    boxShadow:'none',
                    ':hover': {
                      cursor: 'pointer',
                    },
                    ':focus': {
                      border: '1px dotted',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="480"
                      width="312"
                      image={testImage}
                      sx={{
                        transform: isCardHovered? 'scale(1.25)' : 'scale(1)',
                        transition: 'all .2s ease',
                        verticalAlign: 'middle'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
                        color: 'white',
                        padding: '20px 20px',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        color: 'white',
                        padding: '20px 20px',
                      }}
                    >
                      <Typography variant="h5" component="span">Astronauts {/*<Badge color="secondary" badgeContent=" "><EastIcon/></Badge>*/}</Typography>
                      <Typography variant="body2">Learn about those of the NASA corps who make "space sailing" their career profession.</Typography>
                    </Box>
                    <Box
                      sx={{
                        position: 'relative', top: '-10px', zIndex: '3'
                      }}
                    >
                    </Box>
                  </Box>
                </Card>
                :
                ""
              }

              <p>
              This is where the results will go. For now it connects to localhost so it will fail and return nothing.
              </p>
              <p>
                This is the search text: {JSON.stringify(searchText)}
              </p>

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

export default Content;
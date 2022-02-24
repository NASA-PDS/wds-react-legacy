import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch, useSelector} from "react-redux";
import rootActions from "./actions/rootActions";
import { useHistory, useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 500,
    marginTop: '1em',
    marginBottom: '2em'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

const SearchBar = (props) => {
  const classes = useStyles();
  let searchText;
  let history;

  if(props.useClientRouter){
    searchText = props.searchText;
    history = props.history;
  }
  else{
    searchText = useParams()['searchText'];
    history = useHistory();
  }

  const dispatch = useDispatch();
  const [identifier, setIdentifier] = useState('');
  let [prevIdentifier, setPrevIdentifier] = useState(0);
  
  const searchIdentifier =  useSelector(state => {
    return state.appReducer.searchIdentifier;
  });

  const handleInputChange = (event) => {
    setIdentifier(event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    setPrevIdentifier(++prevIdentifier);
    history.push("/search/" + identifier);
  };

  const handleClear = () => {
    setIdentifier('');
    setPrevIdentifier(++prevIdentifier);
    history.replace("/search/");
  };

  const trim = (searchText) => {
    if(searchText && searchText.length > 0){
      searchText = searchText.trim();
    }
    return searchText;
  };

  useEffect(() => {
    if(searchText){
      searchText = trim(searchText);
      setIdentifier(searchText);
      dispatch(rootActions.appAction.sendSearchRequest(searchText));
    }
  }, [prevIdentifier]);

  return (
      <>
        <Paper component="form" className={classes.searchBar}>
          <InputBase
              placeholder='Search by DOI, LID, LIDVID, or PDS3 Data Set ID'
              className={classes.input}
              value={identifier ? identifier : ''}
              inputProps={{ 'aria-label': 'Search identifier' }}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
          />
          <IconButton
              className={classes.iconButton}
              aria-label="search"
              onClick={handleSearch}
              disabled={identifier? false: true}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
              className={classes.iconButton}
              aria-label="clear"
              onClick={handleClear}
          >
            <ClearIcon />
          </IconButton>
        </Paper>
      </>
  )
};

export default SearchBar;
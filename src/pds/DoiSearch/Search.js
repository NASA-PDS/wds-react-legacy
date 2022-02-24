import React from 'react';
import PageHeader from "./PageHeader";
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { Provider } from 'react-redux';
import configureStore from './store';
import {
  makeStyles,
  MuiThemeProvider,
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
  createTheme
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  seed: 'doi-search',
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

let theme = createTheme();

const Search = (props) => {
  const classes = useStyles();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>

          <Provider store={props.store? props.store : configureStore(props.api)}>
            <div className={classes.root}>
              <p>pds-wsd-react search props.history: { JSON.stringify(props.history)}</p>
              <p>pds-wsd-react search props.params: {JSON.stringify(props.params)}</p>

              <PageHeader header={''} text={''}/>
              
              <SearchBar
                history={props.history} 
                params={props.params}
              />

              <SearchResults
                showActions={props.showActions} 
                history={props.history} 
                params={props.params}
              />

            </div>
          </Provider>

        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
};

export default Search;
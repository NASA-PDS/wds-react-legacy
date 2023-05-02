import SearchApp from './components/SearchApp/SearchApp';
import store from './store/store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import pdsTheme from './pdsTheme';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <ThemeProvider theme={pdsTheme}>
            <CssBaseline/>
            <Routes>
              <Route path="/" element = { <SearchApp/>} />
              <Route path="/:searchText" element = { <SearchApp/>} />
              <Route path="/:searchType/:searchText" element = { <SearchApp/>} />
            </Routes>
          </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

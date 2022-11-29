import Content from './components/content/Content';
import store from './store/store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import pdsTheme from './pdsTheme';

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={pdsTheme}>
          <CssBaseline/>
          <Content/>
        </ThemeProvider>
    </Provider>
  );
}

export default App;

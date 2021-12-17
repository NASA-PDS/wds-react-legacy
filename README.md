# NASA PDS Web Design System
The PDS design system leverages Google’s [Material](https://material.io/design) design system to create an adaptable design system of guidelines and stylings that feel distinctly PDS.

## How To Use The PDS Design System
The PDS design system provides a theme that can be added on top of Material.

### Usage In React Applications
There are 3 steps to installing and using the PDS design system in react. The first is to install Material UI. Second is to apply the PDS theme. Third is to change existing HTML tags into Material components.

Material UI makes installing or updating an existing react application with Material design as simple as possible. Most of the information written here can be found on the Material UI website at: https://material-ui.com but it will be condensed here for practicality.

This section is for react applications built with react-app. https://reactjs.org/docs/create-a-new-react-app.html

This information was written as of July 2020. Reference links will be included to the latest on Material UI.

#### 1) Install Material UI
Use npm to install the Material IU core into an existing react application. This will include all the components such as Button, Container, Slider and App Bar.

`npm install @material-ui/core`

Some components are still at an experimental stage and are installed separately in a package called Lab. If Alerts, Autocomplete and Pagination are going to be used in an application install this package as well.

`npm install @material-ui/lab`

Core reference: https://material-ui.com/getting-started/installation/

The full list of Lab components can be found here: https://material-ui.com/components/about-the-lab/

#### 2) Override The Default Theme
##### a) Create A Theme File
Material UI has a default set of typographies, colors, spacings and transitions. These can all be found at: https://material-ui.com/customization/default-theme/#default-theme

In order to override these default styles and use them throughout the application a theme file must be created which will then be passed into a Theme Provider.

A theme is generated using createMuiTheme(). In order to use it we create a Theme.js file with the following content. 

```javascript
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary:{
            main: "cccccc"
        },
        secondary:{
            main: "#FF0000"
        }
    }
});

export default Theme;
```

Any values that override the values at https://material-ui.com/customization/default-theme/#default-theme will then be used throughout the application. In this example we did an override of the palette section’s primary and secondary colors. Any component that uses color=“primary” will now be a light gray and color=“secondary” will be red.

In a similar fashion any of the values that Material UI contains in its [default](https://material-ui.com/customization/default-theme/#default-theme) theme can be overridden.

This theme file is where the content from the theme file provided by the PDS will be placed.

##### b) Pass The Theme File Into A Theme Provider
In order to use the theme file a Theme Provider must be used. The theme provider is included in the core package “@material-ui/core/styles’ The simplest way to use it is to wrap it around your app component and pass it the theme file. This can be done in your index.js file. 

Once there it can be used throughout your application.

In a simple application the following will suffice.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>,
    rootElement
);
```

If you are using Redux or Browser Router the theme provider can be wrapped around those For example here we wrap a theme provider over a redux store and a browser router. 
```javascript
import React from 'react';
import ReactDOM from 'react-dom’;
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <Provider store={configureStore()}>
            <BrowserRouter basename=“/app”>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
```

More details and examples for Theme Provider can be found here: https://material-ui.com/styles/api/ in the theme provider section.

#### 3) Use Material UI Components
Using a component from Material UI is as simple as copy pasting the code from the desired component in the components section of the documents on the material ui site. https://material-ui.com/components/box/

There is however one thing to be aware of. Several HTML elements in order to accept Material UI’s props and theming must be replaced with a component. For example a `<span>` would be better declared with Material UI’s “Box” component then given the prop component=“span”.

For example use:

```HTML
<Box component=“span”>
  <Button />
</Box>
```
Instead of:

```HTML
<span>
  <button/>
</span>
```

This allows the API for the specific component to be used and the theme styles to be applied. If a normal span is used then it will not receive the styling from the theme.

In an existing application in order to get the stylings from the theme file some of these HTML elements must be changed to Material UI’s components. The entire application does not need to be rewritten just the parts that need to have the theme stylings. For a new application try using the corresponding Material UI component instead of the html tag.

This is an example table of conversions that can be made:
HTML Tag | Corresponding Material-UI Component
------------ | -------------
div | Box
span | Box
button | Button
`<input type=“checkbox”>` | Checkbox
`<input type=“radio”>` | Radio
select | Select
input, textarea | TextField
a | Link
table | Table
h1,h2,h3,h4,h5,h6 | Typography

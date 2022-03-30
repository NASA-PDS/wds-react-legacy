# pds-wds-react
A library of Planetary Data System web widgets and components in react.

## Installation
`npm i @nasapds/pds-wds-react`

## Usage

### Doi Search Widget In React
Import the Doi Search into your component.
`import {DoiSearch} from 'pds-wds-react';`

Then include the component in your react render code.
`<DoiSearch/>`

Parameters:

`api` The endpoint to search. By default this is pointing to http://localhost:8085/PDS_APIs/pds_doi_api/0.2/

`showActions` Hides or shows action buttons next to each search result. False by default.

`useClientRouter` If set to true will disable the widget's internal react-router. Set this to true if your app uses react-router. False by default.

`history` A history object from react-router. If your app uses react-router pass the history here. Null by default.

`store` A Redux store object. If you want to customize the behavior of the widget action buttons or the call process you can pass your own store. This is null by default.

In react the doi search could look like this with the parameters changed:

```javascript
<DoiSearch 
    api={'http//localhost:8085/PDS_APIs/pds_doi_api/0.2/'}
    useClientRouter={true} 
    showActions={true}
/>
```

### Doi Search Widget As Embeddable JS
In your project create a directory for example:
`pds-widgets/`

Drop the contents of the `/embedbuild` directory into the newly created directory.

Add a div with the ID of the component set as `DoiSearch`.
`<div id="DoiSearch"></div>`

Link the library into your project HTML using the script tag. Change the directory to the one that you created.
`<script src="pds-widgets/index.js"></script>`

Parameters

`data-api` Point this to your doi api. It is set to localhost 8085 by default.


In your html page the doi search could look like this with the parameters changed:

```javascript
`<div id="DoiSearch" data-api='http//localhost:8085/PDS_APIs/pds_doi_api/0.2/'></div>`
```
## Code Base Development Instructions

### Source
Clone this repository into your workspace first.

The components are found inside `/src/pds/`

Each component has an index.js and a <name>.js file.
`index.js` is for building the embeddable js widget.
`<name>.js` is for building the npm package.

There are three index files inside `/src/pds/` that need to be updated with an import of a new component when one is created. These are `embedBuildIndex.js`, `embedIndex.js` and `npmBuildIndex.js`

### Development Scripts
For testing embeddable widgets run the script `npm run embeddev` This will run a server with `/public/embedIndex.html` as the entry point. You can update this file to show the component that you want to test.

For testing the NPM package run the script `npm run npmbuild` Then run `npm link` you can then create a client app and import using `npm link pds-wds-react`

Import the component into your client app using the Usage section.

There are sometimes problems with multiple instances of react caused by npm link. If this happens, delete `node_modules/react` inside the pds-wds-react source. Then stop and restart the client test app again.

## Building
`npm run build`
Two directories will be created `/build` and `/embedbuild`.

`/build` will the contain the ready to deploy npm files. This is what is deployed to the NPM JS website.

`/embedbuild` will contain the ready to deploy embeddable widget files. This is what can be dropped into a website that is not built with React.

### Publishing to NPM
Update the version in the `/package.json` file.

Use the `X.X.X` semver syntax to set a version or `X.X.X-beta.X` semver syntax for a beta version.

Use `npm publish` to publish a stable version or use `npm publish --tag beta` to publish a beta version.

If you want to test a beta version make sure to install the beta version instead of the latest version. Use `npm install @nasapds/pds-wds-react@beta` for the latest beta version or `npm install @nasapds/pds-wds-react@X.X.X-beta.X` for a specific version.

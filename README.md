# pds-wds-react
A library of planetary data system widgets and components in react. 

## Installation
`npm install`

## Viewing Components
`npm run storybook`

This will run a server with the components loaded into storybook to allow viewing of included components.

## Usage
Get the import line and tag of a widget from storybook and place into your react app. 

For example first import the component from the library:

`import {DoiSearch} from 'pds-wds-react';`

Then include the component in your react render code:

`<DoiSearch/>`

## Code Base Development Instructions

### Source
Clone this repository into your workspace first.

The components are found inside `/src/pds/`

Each component has an index.js, <name>.stories.js, and a <name>.js file.
`index.js` is for building the embeddable widget.
`<name>.stories.js` is for showing the component in storybook. 
`<name>.js` is for building the npm package. 

There are three index files inside `/src/pds/` that need to be updated with an import of a new component when one is created. These are `embedBuildIndex.js`, `embedIndex.js` and `npmBuildIndex.js`

### Development Scripts
For testing embeddable widgets run the script `npm run embeddev` This will run a server with `/public/embedIndex.html` as the entry point.

For viewing the components in storybook run the script  `npm run storybook`. This will run a server with the components loaded into storybook.

For testing the NPM package run the script `npm run npmbuild` Then run `npm link` you can then create a client app and import using `npm link pds-wds-react`

## Building For NPM JS Or A Website That Is Not Built In React
`npm run build`
Two directories will be created `/build` and `/embedbuild`.

`/build` will the contain the ready to deploy npm files. This is what is deployed to the NPM JS website.

`/embedbuild` will contain the ready to deploy embeddable widget files. This is what can be dropped into a website that is not built with React.

### Embeding A Widget Into A Website That Is Not In React
Drop the contents of the `/embedbuild` directory into a project. 

Create a directory and place the files inside. For example 
`pds-widgets/` 

Then link the `index.js` file in the project HTML using the script tag.
`<script src="pds-widgets/index.js"></script>`

Add a div with the ID of the component desired in a chosen location in the project.
`<div id="pdswidget"></div>`
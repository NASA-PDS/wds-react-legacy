# PDS Banner App Bar
This is an app bar that appears at the top of every PDS page. It is a React and Material UI implementation of the original that can be found at: https://github.com/NASA-PDS/pds-wds-web/tree/master/app-bar

This version is a stand alone version that does not need all the pds-wds code to work. It will work in any React + Material UI project.

## How To Use The PDS App Bar

### Step 1) 
Copy this Banner.js file and put it in your project.

### Step 2) 
Copy the following files from this repository at assets/images folder into your project:
```
assets/images/info.png
assets/images/pdsLogo.png
```

### Step 3) 
Change the following import lines at the top of the Banner.js file to point to the images copied in step 2:
```
import logo from '../../assets/images/pdsLogo.png';
import infoImg from '../../assets/images/info.png';
```

### Step 4) 
Import the Banner component into your project by adding an import line at the top of your file that points to the location where the Banner file was copied to. For example:
`import Banner from './components/Banner/Banner';`

### Step 5) 
Add the Banner tag to the desired location in your react project:
`<Banner></Banner>`
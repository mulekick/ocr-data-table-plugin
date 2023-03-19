# How to use the plugin in your react app :

1. Install the plugin
```bash
npm install --save @mulekick/ocr-data-table-plugin
```

2. Import the component in your react app :  
```js
import {DataTable} from "@mulekick/ocr-data-table-plugin";`
```

3. Create the table columns definitions array :
```js
const
    // valid column definitions for the table are objects with the following signature :
    sampleColumnDefinition = {
        // string value that displays as a header for the column :
        header: `My column name`,
        // data type for values that the column will display, either :
        // `string` ->  string primitives
        // `date`   ->  Date objects
        // `select` ->  select input values, ie. objects with the signature { value<string>, label<string>}
        dataType: `string`,
        // field name (actually object key) of the value that the column will display :
        fieldName: `myColumnValue`
    },
    // the table will be passed an array of column definitions so it displays multiple columns
    tableColumnsDefinitions = [
        {header: `My Sample Column 1`, dataType: `string`, fieldName: `fieldString`},
        {header: `My Sample Column 2`, dataType: `date`, fieldName: `fieldDate`},
        {header: `My Sample Column 3`, dataType: `select`, fieldName: `fieldSelect`}
    ];
```

4. Create the table rows data array :
```js 
const
    // each entry in the rows data array must match the column definitions to display without errors
    tableRowsData = [
        {fieldString: `sample value 1`, fieldDate: new Date(`01/01/2022`), fieldSelect: {value: `val1`, label: `select value 1`}},
        {fieldString: `sample value 2`, fieldDate: new Date(`01/01/2023`), fieldSelect: {value: `val2`, label: `select value 2`}}
    ];
```

4. Pass the table columns definitions array and the table rows data array to the component as props :
```js 
<DataTable colDefs={tableColumnsDefinitions} data={tableRowsData} />
```

5. Component props :

| Name    | Description                                      | Remarks                    |
|---------| ------------------------------------------------ | -------------------------- |
| colDefs | array of columns definitions objects (see above) | length must not be zero    |
| data    | array of rows data objects (see above)           | length must not be zero    |

# Create React App customizations :

1. use the standard template for create-react-app
```bash
npx create-react-app ocr-data-table-plugin
```
2. remove useless dependencies
```bash
npm uninstall --save @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals react-scripts
```
3. install project dev dependencies
```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react @mulekick/eslint-config-muleslint babel-plugin-macros react-scripts sass
```
4. install project dependencies
```bash
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @tanstack/react-table react-select
```
5. update package.json :
   - add custom package.json scripts
   - remove ```eslintConfig``` key
   - remove ```browserslist``` key
   - switch to ESM modules use :```"type": "module"```
   - add informational entries
6. add custom ```.eslintrc.json``` file
7. add custom ```.browserslistrc``` file
8. add babel-related config files (```babel.config.json``` and ```.babel-plugin-macrosrc.json```)
9. file system cleanup
```bash
rm src/setupTests.js src/reportWebVitals.js src/logo.svg src/index.css src/App.test.js src/App.css public/logo* public/manifest.json public/robots.txt
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import {DataTable} from "./lib/index.js";

import {employeesCols, employeesSampleData} from "./constants.js";

const
    // init app
    App = props => {
        const
            // extract props
            {nul} = props;

        // return component
        return <DataTable colDefs={employeesCols} data={employeesSampleData} />;
    };

export default App;
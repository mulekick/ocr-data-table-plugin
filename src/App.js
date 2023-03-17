import {DataTable} from "./lib/index.js";

import {sampleCols, sampleData} from "./constants.js";

const
    // init app
    App = props => {
        const
            // extract props
            {nul} = props;

        // return component
        return <DataTable colDefs={sampleCols} data={sampleData} />;
    };

export default App;
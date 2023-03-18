import {DataTable} from "./lib/index.js";

import {sampleCols, sampleData} from "./constants.js";

const
    // init app
    App = props => {
        const
            // extract props
            {nul} = props;

        // return component if columns definitions and rows data exists
        return sampleCols && sampleCols.length && sampleData && sampleData.length ? <DataTable colDefs={sampleCols} data={sampleData} /> : null;
    };

export default App;
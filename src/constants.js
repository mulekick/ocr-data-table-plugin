// import {faker} from "@faker-js/faker";

const
    // columns definitions (title, data type, object key)
    sampleCols = [
        {header: `My Sample Column 1`, dataType: `string`, fieldName: `fieldString`},
        {header: `My Sample Column 2`, dataType: `date`, fieldName: `fieldDate`},
        {header: `My Sample Column 3`, dataType: `select`, fieldName: `fieldSelect`}
    ],
    /*
    // sample select values
    sampleSelectValues = [
        {label: `Label 1`, value: `v1`},
        {label: `Label 2`, value: `v2`},
        {label: `Label 3`, value: `v3`},
        {label: `Label 4`, value: `v4`},
        {label: `Label 5`, value: `v5`}
    ];
    // pick a random value between 2 indices
    rnd = (lb, ub) => lb + Math.round(Math.random() * (ub - lb)),
    // column data filler
    createRandomData = () => ({
        fieldString: faker.name.firstName(),
        fieldDate: faker.date.past(),
        fieldSelect: sampleSelectValues[rnd(0, sampleSelectValues.length - 1)]
    }),
    // sample data
    sampleData = Array.from({length: 15}).map(x => createRandomData());
    */
    sampleData = [];

export {sampleCols, sampleData};
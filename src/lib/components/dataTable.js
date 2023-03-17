/* eslint-disable quotes */

// import modules
import React, {useState} from "react";

// react plugins
import {flexRender, useReactTable} from "@tanstack/react-table";

// fontawesome related (use dynamic imports)
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro.js";

// helpers and redux related
import createTable from "../helpers/table.js";

// subcomponents
import StyledInput from "./styledInput.js";
import StyledSelect from "./styledSelect.js";

const
    // init data table component
    DataTable = props => {
        const
            // extract props
            {colDefs, data} = props,
            // store sorting parameters in local component state
            [ sorting, setSorting ] = useState([]),
            // store filtering parameters in local component state
            [ globalFilter, setGlobalFilter ] = useState(``),
            // create data table (pass source data and local component state)
            table = useReactTable(createTable(colDefs, data, sorting, setSorting, globalFilter, setGlobalFilter)),
            // headers sorting icons
            sortingIcons = {
                asc: <FontAwesomeIcon icon={solid("arrow-up-a-z")} style={{color: `white`}} />,
                desc: <FontAwesomeIcon icon={solid("arrow-up-z-a")} style={{color: `white`}} />
            },
            // columm width
            cw = 100 / Object.keys(data.at(0)).length;

        // return component
        return <>
            <div className="data-table-header">
                { /* pagination management */ }
                <StyledSelect options={[ 10, 20, 30, 40, 50 ].map(x => ({value: x, label: `Show ${ x } rows`}))} onChange={option => table.setPageSize(Number(option.value))} placeholder="Select number of rows per page ..." />
                { /* filtering management */ }
                <StyledInput type="text" value={globalFilter || ``} onChange={e => setGlobalFilter(String(e.target.value))} placeholder="Search all columns..." />
            </div>

            <ul className="data-table">
                {
                    table
                        // table headers
                        .getHeaderGroups()
                        .map(headerGroup => <li key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => <span style={{width: `${ cw }%`}} key={header.id}>
                                    {
                                        header.isPlaceholder ?
                                            null :
                                            <>
                                                {/* column title */}
                                                <div {...{onClick: header.column.getToggleSortingHandler()}}>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                                                {/* sorting indication */}
                                                {sortingIcons[header.column.getIsSorted()] || null}
                                            </>
                                    }
                                </span>)
                            }
                        </li>)
                }
                {
                    table
                        // table rows
                        .getRowModel().rows
                        .map(row => <li key={row.id}>
                            {
                                row
                                    .getVisibleCells()
                                    .map(cell => <span style={{width: `${ cw }%`}} key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>)
                            }
                        </li>)
                }
            </ul>

            <div className="data-table-footer">
                { /* pagination display */ }
                <span className="basic-styled">Page <strong>{table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}</strong></span>
                { /* pages navigation*/ }
                <span>
                    <FontAwesomeIcon icon={solid("fast-backward")} style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} onClick={() => table.setPageIndex(0)} />
                    <FontAwesomeIcon icon={solid("step-backward")} style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
                    <FontAwesomeIcon icon={solid("step-forward")} style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} onClick={() => table.nextPage()} />
                    <FontAwesomeIcon icon={solid("fast-forward")} style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} onClick={() => table.setPageIndex(table.getPageCount() - 1)} />
                </span>
            </div>
        </>;
    };

export default DataTable;
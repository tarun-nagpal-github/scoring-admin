import React, { useState } from "react";
import { rowData } from "util/data/reactTableData";
import { remove } from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";


const ClientSideTable = props => {
    const [dummyData, setDummyData] = useState(rowData);
    const columns = [
        {
            Header: "FirstName",
            accessor: "firstname",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "LastName",
            accessor: "lastname",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "City",
            accessor: "address.city",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "State",
            accessor: "address.state",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "Country",
            accessor: "address.country",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "Postel Code",
            accessor: "address.postelcode",
            className: "text-center",
            headerClassName: "react-table-header-class"
        },
        {
            Header: "Action",
            accessor: "action",
            className: "text-center",
            headerClassName: "react-table-header-class",
            sortable: false,
            filterable: false,
            Cell: props => (
                <span className="react-action-class">
                    <button
                        className="react-table-view-button"
                        onClick={() => viewClick(props.original)}
                    >
                        <i className="fas fa-eye" />
                    </button>
                    <button
                        className="react-table-edit-button"
                        onClick={() => editClick(props.original)}
                    >
                        <i className="fas fa-edit" />
                    </button>
                    <button
                        className="react-table-delete-button"
                        onClick={() => deleteClick(props.original)}
                    >
                        <i className="fas fa-trash" />
                    </button>
                </span>
            ) // Custom cell components!
        }
    ]

    const viewClick = data => {
        // Here you can view the data and make forward action for view data
        alert(JSON.stringify(data));
    };

    const deleteClick = data => {
        // Here you can view the data and delete through API calling
        const array = dummyData;
        remove(array, function (n) {
            return n.id === data.id;
        });
        setDummyData([...array])
    };

    const editClick = data => {
        // Here you can view the data and make forward action for edit data
        alert(JSON.stringify(data));
    };
    return (
        <div className="roe-card-style mt-15 mb-30">
            <div className="roe-card-header">
                <span className="hash"># </span> Client Side Table
            </div>
            <div className="roe-card-body">
                {/* You can take this configuration for react table customization */}
                <ReactTable
                    data={dummyData}
                    columns={columns}
                    defaultPageSize={10}
                    filterable
                    defaultFilterMethod={(filter, row) => {
                        const id = filter.pivotId || filter.id;
                        return row[id] !== undefined
                            ? String(
                                row[id].toLowerCase()
                            ).includes(filter.value.toLowerCase())
                            : true;
                    }}
                    className="-striped -highlight custom-react-table-theme-class"
                />
                {/* You can take this configuration for react table customization */}
            </div>
        </div>
    );
};

export default ClientSideTable;

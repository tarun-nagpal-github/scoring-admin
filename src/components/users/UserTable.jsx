import React, { useState, useEffect, useRef, useCallback } from "react";
import { dummyData } from "util/data/reactTableData";
import ReactTable from "react-table";
import Button from "components/button/Button";
import RoyTooltip from "components/common/RoyTooltip";
import Pagination from "components/common/Pagination";
import "react-table/react-table.css";
import { withRouter } from "react-router";
import CustomToast from "components/notifications/CustomToast";
import LoaderComponent from "components/common/LoaderComponent"
let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const UserTable = props => {
    const [snackBar, setSnackBar] = useState(initSnackBar);
    const [tblData, settblData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [pages, setPages] = useState(50);
    const [activePage, setActivePage] = useState(0);
    const [searchText, setSearchText] = useState(null);
    const [sortedId, setSortedId] = useState({ id: null, desc: null });
    const [changeMethodFlag, setChangeMethodFlag] = useState(false);

    const tableRef = useRef();
    const { history } = props;
    
    const formAction = useCallback((action, data = null) => {
        // Here you can view the data and make forward action for edit data
        if (action === "add") {
            history.push("/users/add");
        } else if (action === "edit") {
            history.push(`/users/edit/${data.id}`);
        }
    }, [history]);

    const columns = React.useMemo(
        () => [
            {
                Header: "FirstName",
                accessor: "firstname",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "LastName",
                accessor: "lastname",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "Email",
                accessor: "email",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "Phone Number",
                accessor: "phone_number",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "Status",
                accessor: "status",
                className: "text-center",
                headerClassName: "react-table-header-class",
                sortable: false,
                filterable: false,
                width: 180,
                Cell: props => (
                    <div className="react-action-class">
                        {props.original.isActive ? (
                            <RoyTooltip
                                id={`active-${props.original.id}`}
                                title={"Click to Deactivate"}
                                placement="left"
                            >
                                <div id={`active-${props.original.id}`}>
                                    <button
                                        style={{ minWidth: "125px" }}
                                        className="c-btn c-info mr-10"
                                        onClick={() => {
                                            console.log('props', props)
                                            activeInactiveStatusHandler(
                                                props.original
                                            )
                                        }
                                        }
                                    >
                                        <div className="fs-14 medium-text">
                                            <i className="fas fa-toggle-off mr-6" />{" "}
                                            Active
                                        </div>
                                    </button>
                                </div>
                            </RoyTooltip>
                        ) : (
                                <RoyTooltip
                                    id={`deactive-${props.original.id}`}
                                    title={"Click to Active"}
                                    placement="left"
                                >
                                    <div id={`deactive-${props.original.id}`}>
                                        <Button
                                            style={{ minWidth: "125px" }}
                                            className="c-btn c-warning mr-10"
                                            onClick={() =>
                                                activeInactiveStatusHandler(
                                                    props.original
                                                )
                                            }
                                        >
                                            <div className="fs-14 medium-text">
                                                <i className="fas fa-toggle-on mr-6" />{" "}
                                                InActive
                                        </div>
                                        </Button>
                                    </div>
                                </RoyTooltip>
                            )}
                    </div>
                ) // Custom cell components!
            },
            {
                Header: "Action",
                accessor: "action",
                className: "text-center",
                headerClassName: "react-table-header-class",
                sortable: false,
                filterable: false,
                width: 250,
                Cell: props => (
                    <div className="react-action-class">
                        <Button
                            className="c-btn c-success mr-10"
                            onClick={() => formAction("edit", props.original)}
                        >
                            <div className="fs-14 medium-text">
                                <i className="fas fa-edit mr-6" /> Edit
                            </div>
                        </Button>
                        <Button
                            className="c-btn c-danger"
                            id="delete"
                            onClick={() => deleteClick(props.original)}
                        >
                            <div className="fs-14 medium-text">
                                <i className="fas fa-trash mr-6" /> Delete
                            </div>
                        </Button>
                    </div>
                ) // Custom cell components!
            }
        ],
        [formAction]
    );

    const callSearchApi = useCallback(() => {
        setChangeMethodFlag(changeMethodFlag => !changeMethodFlag)
    }, []);

    useEffect(() => {
        if (searchText !== null) {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
                debounceTimer = null;
            }
            debounceTimer = setTimeout(callSearchApi, 500);
        }
    }, [searchText, callSearchApi]);

    useEffect(() => {
        const params = {
            page: 1,
            sorted: {
                id: null,
                desc: null
            },
            searchText: ""
        }
        callListApi(params)
    }, []);

    const callListApi = (params) => {
        console.log('params', params)
        // alert("when component mount call api and get first 10 record");
        // When you get data from api add data to state using this method settblData(data)
        // when you call api set loader of table using setLoader(true)
        // when you call api set number of pages using setPages(count)
        settblData(dummyData);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
        setPages(50);
    }

    const onChangePageGetData = state => {
        if (activePage !== null) {
            const sorted = state.sorted
            if (sorted.length > 0) {
                setSortedId({
                    id: sorted[0].id,
                    desc: sorted[0].desc
                })
            }
            if (state.page !== activePage || searchText !== null || (sorted.length > 0 && (sorted[0].id !== sortedId.id || sorted[0].desc !== sortedId.desc))) {
                const params = {
                    page: state.page + 1,
                    sorted: {
                        id: sorted.length > 0 ? sorted[0].id : null,
                        desc: sorted.length > 0 ? sorted[0].desc : null
                    },
                    searchText: searchText
                }
                callListApi(params)
                setSnackBar({
                    flag: true,
                    heading: 'Call User List API with filters',
                    description: `page: ${params.page},  sorted: ${params.sorted.id},  searchText: ${searchText}`
                })
            }
        }
    };

    const deleteClick = data => {
        // console.log('tblData', tableRef.current.state.data)
        // console.log('activePgae', tableRef.current.state.page)
        // Here you can view the data and delete through API calling
        setSnackBar({
            flag: true,
            heading: 'Delete Handler',
            description: `you have to call api and Delete data, Your id is: ${data.id}`
        })
    };

    const activeInactiveStatusHandler = data => {
        // console.log('tblData', tableRef.current.state.data)
        // console.log('activePgae', tableRef.current.state.page)
        setSnackBar({
            flag: true,
            heading: 'Status Change Action',
            description: `you have to call api to change status, Your id is: ${data.id}`
        })
    };

    return (
        <div>
            <div className="plr-15">
                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header module-header">
                        <div className="flex-1 fs-16 demi-bold-text">
                            <span className="hash"># </span> User list
                        </div>
                        <div className="mr-10">
                            <input
                                value={searchText ? searchText : ""}
                                onChange={e => setSearchText(e.target.value)}
                                type="text"
                                placeholder="Search..."
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                            />
                        </div>
                        <div>
                            <Button
                                className="c-btn ma-5"
                                onClick={() => formAction("add")}
                                style={{
                                    backgroundColor: '#5c258d',
                                    color: '#fff'
                                }}
                            >
                                <i className="fas fa-plus mr-10"></i>Add User
                            </Button>
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <ReactTable
                            style={{
                                border: "none",
                                boxShadow: "none"
                            }}
                            ref={tableRef}
                            data={tblData}
                            columns={columns}
                            defaultPageSize={10}
                            filterable
                            manual
                            className="-striped -highlight custom-react-table-theme-class"
                            pages={pages}
                            page={activePage}
                            PaginationComponent={Pagination}
                            LoadingComponent={LoaderComponent}
                            loading={loader}
                            onFetchData={onChangePageGetData}
                            onPageChange={pageIndex => setActivePage(pageIndex)}
                            changeMethodFlag={changeMethodFlag}
                        />
                    </div>
                    <CustomToast
                        heading={snackBar.heading}
                        width={400}
                        show={snackBar.flag}
                        transition
                        position="top-middle"
                        className="c-success"
                        message={snackBar.description}
                        onCloseCLick={() =>
                            setSnackBar(initSnackBar)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default withRouter(UserTable);

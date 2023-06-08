import React, { useMemo } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useEffect } from "react";

// import GetPostHooks from "../configs/getPostHooks";
import DataTable from "react-data-table-component";
// import { downloadCSV, Export } from "../../configs/exportCSV";
import GetPostHooks from "../Configs/getPostHooks";
import { paginationComponentOptions } from "../Configs";
import { Link, useNavigate, Navigate } from "react-router-dom";



export const Home = () => {

    const [loading, fetch, callback] = GetPostHooks(); // custom hook
    const [data, setData] = React.useState([]);
    const [logout, setLogout] = React.useState(false);
    const [redirect, setRirect] = React.useState(false);
    const [redirect_data, setRedirectData] = React.useState({});
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setLogout(true)
        }
        const customerProps = {
            url: `jokes`
        };


        callback(customerProps);

        if (fetch) {
            if (fetch && fetch.status === 200) {
                setData(fetch.data);
            }
        }
        // eslint-disable-next-line
    }, [loading, fetch]);



    const handleButtonClick = (e: React.SetStateAction<{}>) => {
        setRedirectData(e);
        setRirect(true);
    };



    const columns: any = useMemo(
        () => [

            {
                name: "id.",
                selector: (row: { id: any; }) => row.id,
                sortable: true,
            },

            {
                name: "Title.",
                selector: (row: { Title: any; }) => row.Title,
                sortable: true,
            },

            {
                name: "Body",
                selector: (row: { Body: any; }) => row.Body,
                sortable: true,
                compact: true,
            },
            {
                name: "Author",
                selector: (row: { Author: any; }) => row.Author,
                sortable: true,
                compact: true,
            },


            {
                name: "CreatedAt",
                selector: (row: { CreatedAt: any; }) => row.CreatedAt,
                sortable: true,
                compact: true
            },


            {
                name: "Views",
                selector: (row: { Views: any; }) => row.Views,
                sortable: true,
                compact: true,

                conditionalCellStyles: [
                    {
                        when: (row: { Views: number; }) => row.Views >= 0 && row.Views <= 25,
                        style: {
                            backgroundColor: 'tomato',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }
                    },

                    {
                        when: (row: { Views: number; }) => row.Views >= 26 && row.Views <= 50,
                        style: {
                            backgroundColor: 'orange',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        },
                    },

                    {
                        when: (row: { Views: number; }) => row.Views >= 51 && row.Views <= 75,
                        style: {
                            backgroundColor: 'yellow',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        },

                    },

                    {
                        when: (row: { Views: number; }) => row.Views >= 75 && row.Views <= 100,
                        style: {
                            backgroundColor: 'green',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        },
                    }
                ]
            },

            {
                cell: (ef: any) => (
                    <Button
                        className="btn-button"
                        color="success"
                        onClick={(e) => handleButtonClick(ef)}
                    >
                        Edit
                    </Button>
                ),
                name: "Options",

                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            },
        ],
        []
    );

    return (
        <div className="top col-8 offset-2 ">

            <br />

            {redirect ? (
                <>
                    {navigate("/jokes", {
                        state: redirect_data,
                        replace: true,
                    })}
                </>
            ) : null}
            {logout ?
                <Navigate to="/login" />
                : null}

            <div className="col-12 float-end">
                <Link to="/login">
                    <Button outline color="danger" className="btn-sm">
                        LogOut
                    </Button>
                </Link>
            </div>
            <Card>

                <br />
                <CardBody>

                    <br />
                    <div className="col-12 float-end">
                        <h4> <b>
                            <Link to='/jokes'>
                                Joke
                            </Link>
                        </b>
                        </h4>
                    </div>

                    <DataTable
                        data={data}
                        columns={columns}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

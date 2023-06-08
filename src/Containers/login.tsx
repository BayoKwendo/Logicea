import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Navigate } from "react-router-dom";



export const Login = () => {

    const [home, setHome] = React.useState(false);
    useEffect(() => {
        localStorage.clear()
    }, []);


    const storeToken = () => {

        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlRlc3QgVXNlciIsInVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJtc2lzZG4iOiIyNTQ3MTc2Mjk3MzIiLCJjb21wYW55IjoidGVzdCB0ZXN0Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2MjEwODU3LCJleHAiOjE2ODg4MDI4NTd9.OAyDL5CRWpTdAfZf1cwzjXhwNBzbVBMiSU63TwACYEM")

        setTimeout(() =>
            setHome(true)

            , 1000)

    };

    // storeToken

    return (
        <div className="top col-8 offset-2 float-end ">



            {home ?
                <Navigate to="/" />
                : null
            }

            <br />
            <br />
            <h4>Welcome Please click the below button to login</h4>

            <br />
            <br />

            <br />
            <div className="top col-12 ">
                <Button className="btn-sm success" onClick={storeToken}>
                    Login IN
                </Button>
            </div>
        </div>
    );

};

import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useEffect } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";



export const Jokes = () => {
    
    const location = useLocation();

    const [title, setTittle] = React.useState(location.state ? location.state.Title : '');
    const [author, setAuthor] = React.useState(location.state ? location.state.Author : '');
    const [views, setViews] = React.useState(location.state ? location.state.Views : ''); 
    const [body, setBody] = React.useState(location.state ? location.state.Author : '');

    const [logout, setLogout] = React.useState(false);


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setLogout(true)
        }
    }, []);

    return (
        <div className="top col-8 offset-2 ">

            {logout ?
                <Navigate to="/login" />
                : null}

            <br />
            <div className="col-12 float-end">
                <Link to="/new_joke">
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
                        <Link to="/">
                            <Button outline color="primary" className="btn-sm">
                                Go back
                            </Button>
                        </Link>
                    </div>


                    <form className="col-md-6 offset-md-3" >
                        <span className="form__form-group-label">Author.</span>

                        <div className="form__form-group-field">
                            <input
                                className="form-control"
                                placeholder="Enter Author"
                                name="author"
                                id="input"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <br />

                        <span className="form__form-group-label">Views.</span>

                        <div className="form__form-group-field">
                            <input
                                className="form-control"
                                placeholder="Enter Views"
                                name="author"
                                id="input"
                                value={views}
                                onChange={(e) => setViews(e.target.value)}
                            />
                        </div>
                        <br />

                        <span className="form__form-group-label">Title.</span>

                        <div className="form__form-group-field">
                            <input
                                className="form-control"
                                placeholder="Enter title"
                                name="author"
                                id="input"
                                value={title}
                                onChange={(e) => setTittle(e.target.value)}
                            />
                        </div>
                        <br />

                        <span className="form__form-group-label">Body.</span>

                        <div className="form__form-group-field">
                            <input
                                className="form-control"
                                placeholder="Enter Body"
                                name="author"
                                id="input"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className="col-12">

                            <br />
                            <Button
                                type="submit"
                                outline
                                color="primary"
                                className="float-right"
                            >
                                Submit
                                <i className="fa fa-search"></i>
                            </Button>{" "}
                            &nbsp;&nbsp;&nbsp;
                        </div>
                    </form>

                </CardBody>
            </Card>
        </div>
    );
};

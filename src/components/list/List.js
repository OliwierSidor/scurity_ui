import React, {useEffect, useState} from 'react';
import classes from './List.module.css';
import connection from "../../axios/axios";

const List = () => {
    const [authorizationState, setAuthorizationState] = useState("");

    useEffect(() => {
        connection.get("/api/test/authorized")
            .then((data) => {
                setAuthorizationState(data.data)
            })
            .catch((error) => {
                setAuthorizationState(error.message)
            });

    }, []);

    return (
        <div className={classes.List}>
            {authorizationState}
        </div>
    );
};
export default List;
import React, {useState} from 'react';
import classes from './LoginPage.module.css';
import Card from "../card/Card";
import {Button, Grid, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/authorization";

// See: https://github.com/SaintAmeN/arppl4_react_rental_ui/blob/master/src/components/carform/CarForm.js
const LoginPage = (props) => {
    const [authorization, setAuthorization] = useState({});

    const updateValue = (event, name) => {
        authorization[name] = event.target.value;

        const authorizationCopy = {...authorization};
        setAuthorization(authorizationCopy)

    }

    const sendForm = () => {
        console.log('Login attempt')
        props.authenticate(authorization)
    }

    return (
        <div className={classes.LoginPage}>
            <Card cardTitle={"Login Page"}>
                <Grid container>
                    <Grid item xs={12} className={classes.FormItem}>
                        <TextField
                            onChange={(event) => {
                                updateValue(event, "username")
                            }}
                            value={authorization.username}
                            label={"Username:"}
                            disabled={props.isLoading}
                            variant={"filled"}/>
                    </Grid>
                    <Grid item xs={12} className={classes.FormItem}>
                        <TextField
                            type={"password"}
                            onChange={(event) => {
                                updateValue(event, "password")
                            }}
                            value={authorization.password}
                            label={"Password:"}
                            disabled={props.isLoading}
                            variant={"filled"}/>
                    </Grid>
                    <Grid container className={classes.FormButtonPanel}>
                        <Grid item xs={2}>
                            {props.isLoading?"TRUE" : "FALSE"}
                        </Grid>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={2}>
                            <Button className={classes.FormButtonSubmit}
                                    variant={"contained"}
                                    onClick={sendForm}
                                    disabled={props.isLoading}
                                    endIcon={<Send/>}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        isLoading: state.authorization.loading,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        authenticate: (authorization) => dispatch(actions.authenticateUser(authorization))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
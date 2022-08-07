import React from 'react';
import classes from './AppBody.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../login/LoginPage";
import {connect} from "react-redux";
import Home from "../Home";
import List from "../list/List";

const AppBody = (props) => {
    const getLoginContent = () => {
        return (
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"*"} element={<Navigate to="/login"/>}></Route>
            </Routes>
        )
    }


    const getContent = () => {
        return (
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/list"} element={<List/>}></Route>
                {/*<Route path={"/form"} element={<XForm/>}></Route>*/}
            </Routes>
        )
    }


    return (
        <div className={classes.AppBody}>
            {props.token != null ? getContent() : getLoginContent()}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        token: state.authorization.token,
    }
}
export default connect(mapStateToProps, null)(AppBody);
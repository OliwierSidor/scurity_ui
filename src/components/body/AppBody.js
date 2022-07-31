import React from 'react';
import classes from './AppBody.module.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "../login/LoginPage";
import {connect} from "react-redux";

const AppBody = (props) => {
    const getLoginContent = () => {
        return (<LoginPage></LoginPage>)
    }


    const getContent = () => {
        return (
            <Routes>
                <Route path={"/"}></Route>
                {/*<Route path={"/list"} element={<XList/>}></Route>*/}
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
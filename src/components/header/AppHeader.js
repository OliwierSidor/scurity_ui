import React from 'react';
import classes from './AppHeader.module.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const AppHeader = (props) => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <p>ARP 4 - Security UI</p>
            </div>
            <div className={classes.HeaderRight}>
                {props.token != null ? "Logged in" : ""}
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/list"}>
                    <div>List</div>
                </Link>
                <Link to={"/form"}>
                    <div>Form</div>
                </Link>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        token: state.authorization.token,
    }
}
export default connect(mapStateToProps, null)(AppHeader);
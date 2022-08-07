import React from 'react';
import classes from './AppHeader.module.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/authorization";

const AppHeader = (props) => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <p>ARP 4 - Security UI</p>
            </div>
            <div className={classes.HeaderRight}>
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/list"}>
                    <div>List</div>
                </Link>
                <Link to={"/form"}>
                    <div>Form</div>
                </Link>
                    {props.token == null? (<Link to={"/login"}><div>Login</div></Link>) : ("")}
                {props.token != null? (<a onClick={()=>{props.logout()}}><div>Logout</div></a>) : ("")}
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        token: state.authorization.token,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.authorizationLogout()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
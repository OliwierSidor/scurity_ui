import classes from './App.module.css'
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";
import AppBody from "./components/body/AppBody";
import * as actions from "./redux/actions/authorization";
import {connect} from "react-redux";
import {useEffect} from "react";

function App(props) {
    useEffect(() => {
        props.checkAuthentication();
    })
    return (
        <div className={classes.App}>
            <AppHeader/>
            <AppBody/>
            <AppFooter/>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        checkAuthentication: () => dispatch(actions.checkStorageAuthentication())
    }
}

export default connect(null, mapDispatchToProps)(App);

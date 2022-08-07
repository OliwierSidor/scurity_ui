import React from "react";
import classes from "./Home.module.css"

const Home = () => {
    return(
        <div className={classes.Home}>
            This is home page. It works even thought im not logged in
        </div>
    );
};

export default Home;
import React, {useEffect, useState, Suspense} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './LoadingGrow.module.css';

const LoadingGrow = (props) => {
    return (
        <div className={classes.parentSpinner}>
            <div className={classes.spinnerGrow}></div>
        </div>
    ) ;
}

export { LoadingGrow };
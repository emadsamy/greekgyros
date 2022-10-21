import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Error404.module.css';
import { NavigationBar } from '../../components/index';
import {Helmet} from "react-helmet";

const Error404 = (props) => {
    useEffect(() => {
        
    }, []);
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <NavigationBar />
            <div className={classes.error}>
                <div className={`container`}>
                    Page Not Found
                </div>
            </div>
        </>
    );
}

export { Error404 };
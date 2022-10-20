import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Error404.module.css';
import { NavigationBar } from '../../components/index';

const Error404 = (props) => {
    useEffect(() => {
        
    }, []);
    return (
        <>
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
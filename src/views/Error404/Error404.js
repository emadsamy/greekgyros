import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Error404.module.css';
import {Helmet} from "react-helmet";
import Error404Img from '../../assets/img/error404.png';

const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className={classes.error}>
                <div className={classes.error404}>
                    <img className={`img-fluid`} src={Error404Img} alt={'Image Not Found'} />
                    <div className={classes.errorTitle}>Page Not Found</div>
                    <NavLink to="/" className={`btn main-btn`}> Back To Home</NavLink>
                </div>
            </div>
        </>
    );
}

export { Error404 };
import React, {useEffect, useState, Suspense} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Loading.module.css';
import LoadingImg from '../../assets/img/icons/loading-blue.svg';

const Loading = (props) => {
    return (
        <div className={`${classes.parentLoading} ${props.parentClass}`}>
            <img className={`${props.childClass} ${classes.loading}`} src={LoadingImg} />
        </div>
    ) ;
}

export { Loading };
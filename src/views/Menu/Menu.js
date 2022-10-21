import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Menu.module.css';
import { NavigationBar, Footer } from '../../components/index';

const Menu = (props) => {
    return (
        <>
            <NavigationBar />
            <div className={classes.menu}>
                <div className={classes.wrapperContainer}>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Menu };
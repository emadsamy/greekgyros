import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Menu.module.css';
import { Header } from './Header';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";

const Menu = (props) => {
    return (
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <NavigationBar />
            <div className={classes.menu}>
                <div className={classes.wrapperContainer}>
                    <div className={`container`}>
                        <Header />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Menu };
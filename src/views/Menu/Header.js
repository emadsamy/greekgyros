import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Menu.module.css';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";
import MenuBg from '../../assets/img/menu.png';

const Header = (props) => {
    return (
        <>
            <div style={{backgroundImage: `url(${MenuBg})`}} className={classes.header}>
                <div className={classes.mainTitle}>Discover & Order you love.</div>
                <div className={classes.mainDesc}>
                    Get Food and drinks delivered from amazing Greek Gyros {';)'}
                    <br />
                    Don't stand in line - order Online!
                    <br />
                    Choose from our menu.
                </div>
                <div className={classes.headerAction}>
                    <button className={`btn main-btn`}><span className={`icon-delivery icon`}></span> Order Now!</button>
                </div>
            </div>
        </>
    );
}

export { Header };
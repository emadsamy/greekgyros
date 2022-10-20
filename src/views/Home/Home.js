import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { NavigationBar } from '../../components/index';
import { Header } from './Header';
import { Benefits } from './Benefits';
import { Categories } from './Categories';

const Home = (props) => {
    useEffect(() => {
        
    }, []);
    return (
        <>
            <NavigationBar />
            <div className={classes.homeContainer}>
                <Header />
                <Benefits />
                <Categories />
            </div>
        </>
    );
}

export { Home };
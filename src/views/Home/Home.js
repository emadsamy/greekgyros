import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { NavigationBar, Footer } from '../../components/index';
import { Header } from './Header';
import { Benefits } from './Benefits';
import { Categories } from './Categories';
import { Products } from './Products';

const Home = (props) => {
    return (
        <>
            <NavigationBar />
            <div className={classes.homeContainer}>
                <Header />
                <Benefits />
                <Categories />
                <Products />
                <Footer />
            </div>
        </>
    );
}

export { Home };
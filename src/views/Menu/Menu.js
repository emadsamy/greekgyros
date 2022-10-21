import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Menu.module.css';
import { Header } from './Header';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import MenuBg from '../../assets/img/menu.png';

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
                        <div className={classes.categories}>
                            <div className={classes.subTitle}>Choose Category!</div>
                            <div className={classes.catsGrid}>
                                {/* <div style={{backgroundImage: `url(${})`}} className={classes.catRow}> */}
                                <div className={classes.catRow}>
                                    <img className={`img-fluid ${classes.crImgBg}`} src={MenuBg} alt={'Category'} />
                                    <img className={`img-fluid ${classes.crImg}`} src={Coffee} alt={'Category'} />
                                    <div className={classes.crTitle}>Drinks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Menu };
import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import Food from '../../assets/img/food.jpeg';

const Categories = (props) => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: Food,
            title: 'Food'
        },
        {
            id: 2,
            image: Food,
            title: 'Shawerma'
        },
        {
            id: 3,
            image: Food,
            title: 'Drinks'
        },
        {
            id: 4,
            image: Food,
            title: 'Coffes'
        },
        {
            id: 5,
            image: Food,
            title: 'Food'
        }
    ]);
    return (
        <>
            <div className={classes.categories}>
                <div className={`container`}>
                    <div className={classes.catTitle}>
                        Categories
                        <span className={classes.titleLine}></span>
                    </div>
                    <div className={classes.catsGrid}>
                        {
                            items.map((row, index) => {
                                return (
                                    <NavLink to="/categories" className={`${classes.catCard} fc`}>
                                        <div className={classes.catHover}></div>
                                        <img className={`img-fluid ${classes.catCardImg}`} src={row.image} alt={'food'} />
                                        <div>
                                            <div className={classes.catCardTitle}>{row.title}</div>
                                        </div>
                                    </NavLink>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export { Categories };
import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { Category } from '../../components/index';

const Categories = (props) => {

    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'Food',
            type: 'food',
        },
        {
            id: 2,
            title: 'Drinks',
            type: 'drinks',
        },
        {
            id: 3,
            title: 'Food',
            type: 'food',
        },
        {
            id: 4,
            title: 'Drinks',
            type: 'drinks',
        },
        {
            id: 5,
            title: 'Food',
            type: 'food',
        },
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
                            categories.map((row, index) => {
                                return <NavLink to="/menu" state={{catId: row.id}}>
                                    <Category key={index} id={row.id} title={row.title} type={row.type} />
                                </NavLink>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export { Categories };
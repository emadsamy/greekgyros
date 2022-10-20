import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';

const Categories = (props) => {
    const [items, setItems] = useState([]);
    return (
        <>
            <div className={classes.categories}>
                <div className={`container`}>
                    <div className={classes.catTitle}>
                        Categories
                        <span className={classes.titleLine}></span>
                    </div>
                    <div className={classes.catsGrid}>
                        <div className={classes.catCard}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Categories };
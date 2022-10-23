import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Category.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';

import FoodIc from '../../assets/img/food.png';
import Drinks from '../../assets/img/drinks.png';

const Category = (props) => {

    const handleClass = (id) => {
        props.onActiveClass(id);
    }

    return (
        <>
            <div onClick={() => handleClass(props.id)} className={`${classes.catRow} ${props.isActive == props.id && classes.activeCat}`}>
                {props.type == 'food' ? <img className={`img-fluid ${classes.crImg}`} src={FoodIc} alt={props.title} /> : '' }
                {props.type == 'drinks' ? <img className={`img-fluid ${classes.crImg}`} src={Drinks} alt={props.title} /> : '' }
                {props.type == 'all' ? <img className={`img-fluid ${classes.crImg} ${classes.selectAll}`} src={props.select} alt={props.title} /> : '' }
                <div className={classes.crTitle}>{props.title}</div>
            </div>
        </>
    );
}

export { Category };
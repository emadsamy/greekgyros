import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Category.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';

import FoodIc from '../../assets/img/food.png';
import Drinks from '../../assets/img/drinks.png';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// {t('welcome')}
// {i18n.language == "ru" ? props.title_ar : props.title}

const Category = (props) => {

    const { t, i18n } = useTranslation();

    const handleClass = (id) => {
        props.onActiveClass(id);
    }

    return (
        <>
            <div onClick={() => handleClass(props.id)} className={`${classes.catRow} ${props.className} ${props.isActive == props.id && classes.activeCat}`}>
                {
                    props.type && props.type == 'all' ? 
                        <div className={classes.irParent}><img className={`img-fluid ${classes.crImg} ${classes.selectAll}`} src={props.select ? props.select : ''} /></div> 
                        : <div className={classes.irParent}><img className={`img-fluid ${classes.crImg}`} src={props.image} alt={i18n.language == "ru" ? props.title_ru : props.title_en} /></div> }
                <div className={classes.crTitle}>{i18n.language == "ru" ? props.title_ru : props.title_en}</div>
            </div>
        </>
    );
}

export { Category };
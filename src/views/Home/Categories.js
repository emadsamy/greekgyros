import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { Category } from '../../components/index';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as actions from "../../store/index";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// {t('welcome')}
// {i18n.language == "ar" ? props.title_ar : props.title} 

const Categories = (props) => {

    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    useState(() => {
        dispatch(actions.categories());
    }, [dispatch]);
    const categories = useSelector((state) => state.categories);

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
                                return <NavLink key={index} to="/menu" state={{catId: row.id}}>
                                    <Category 
                                        key={index} 
                                        id={row.id} 
                                        title_ru={row.title_ru} 
                                        title_en={row.title_en} 
                                        image={row.image} />
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
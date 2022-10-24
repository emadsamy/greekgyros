import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import classes from './Menu.module.css';
import { Header } from './Header';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";
import Food from '../../assets/img/food.png';
import Drinks from '../../assets/img/drinks.png';
import Select from '../../assets/img/select.png';
import MenuBg from '../../assets/img/menu.png';
import Coffee from '../../assets/img/menu/coffee.jpg';
import FoodPro from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import { Product, Category } from '../../components/index';

const Menu = (props) => {
    const location = useLocation();
    const { catId } = location.state ? location.state : '';
    const [isActive, setActive] = useState(catId ? catId : 0);
    const onActiveClass = (id) => {
        setActive(id);
        console.log(id);
    };
    const funcHandle = (id, name) => {
        console.log(id, name);
    }
    useState(() => {
        console.log(isActive);
    }, [isActive]);
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

    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Shawerma Sandwich',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [Coffee, FoodPro, Pizza],
            price: 120,
            price_ru: 150,
            category: {title: 'Food'},
            fav: '',
        },

        {
            id: 2,
            title: 'Falafel',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [FoodPro, Coffee, Pizza],
            price: 120,
            price_ru: 150,
            category: {title: 'Drinks'},
            fav: 'Best!'
        },

        {
            id: 3,
            title: 'Pizza & Pasta',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [FoodPro, Food, Coffee],
            price: 120,
            price_ru: 150,
            category: {title: 'Shawerma'},
            fav: ''
        },
    ]);
    return (
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <NavigationBar />
            <div className={classes.menu}>
                <div className={classes.wrapperContainer}>
                    <div className={`container`}>
                        <Header key={1} />
                        {/* Categories */}
                        <div className={classes.categories}>
                            <div className={classes.subTitle}>Choose Category!</div>
                            <div className={classes.catsGrid}>
                                <Category key={1} onActiveClass={onActiveClass} id="0" isActive={isActive} select={Select} title={'All'} type="all" />
                                {
                                    categories.map((row, index) => {
                                        return <Category key={index} onActiveClass={onActiveClass} isActive={isActive} id={row.id} title={row.title} type={row.type} />;
                                    })   
                                }
                            </div>
                        </div>

                        {/* Products */}
                        <div className={classes.prosContainer}>
                            <div className={classes.subTitle}>Products <div className={classes.counter}>207</div></div>
                            <div className={classes.gridPros}>
                                {
                                    items.map((row, index) => {
                                        return <Product key={index} onSelectLanguage={funcHandle} id={row.id} title={row.title} description={row.description} category={row.category.title} image={row.images} price={row.price} fav={row.fav} />;
                                    })
                                }

                                {
                                    items.map((row, index) => {
                                        return <Product key={index} onSelectLanguage={funcHandle} id={row.id} title={row.title} description={row.description} category={row.category.title} image={row.images} price={row.price} fav={row.fav} />;
                                    })
                                }
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
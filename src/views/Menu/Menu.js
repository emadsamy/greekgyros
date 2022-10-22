import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
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
import { Product } from '../../components/index';

const Menu = (props) => {
    const [isActive, setActive] = useState(0);
    const handleClassToggle = (id) => {
        setActive(id);
        console.log(id);
    };
    const funcHandle = (id, name) => {
        console.log(id, name);
    }
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
                        <Header />
                        {/* Categories */}
                        <div className={classes.categories}>
                            <div className={classes.subTitle}>Choose Category!</div>
                            <div className={classes.catsGrid}>
                                <div onClick={() => handleClassToggle(0)} className={`${classes.catRow} ${isActive == 0 && classes.activeCat}`}>
                                    <img className={`img-fluid ${classes.crImg} ${classes.selectAll}`} src={Select} alt={'Category'} />
                                    <div className={classes.crTitle}>All</div>
                                </div>
                                {
                                    categories.map((row, index) => {
                                        return (
                                            <div key={index} onClick={() => handleClassToggle(row.id)} className={`${classes.catRow} ${isActive == row.id && classes.activeCat}`}>
                                                {row.type == 'food' ? <img className={`img-fluid ${classes.crImg}`} src={Food} alt={row.title} /> : '' }
                                                {row.type == 'drinks' ? <img className={`img-fluid ${classes.crImg}`} src={Drinks} alt={row.title} /> : '' }
                                                <div className={classes.crTitle}>{row.title}</div>
                                            </div>
                                        )
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
                                        return <Product onSelectLanguage={funcHandle} id={row.id} title={row.title} description={row.description} category={row.category.title} image={row.images} price={row.price} fav={row.fav} />;
                                    })
                                }

{
                                    items.map((row, index) => {
                                        return <Product onSelectLanguage={funcHandle} id={row.id} title={row.title} description={row.description} category={row.category.title} image={row.images} price={row.price} fav={row.fav} />;
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
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
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as actions from "../../store/index";
import { Loading, LoadingGrow } from '../../components/index';

const Menu = (props) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [pros, setPros] = useState([]);
    const [prosCount, setProsCount] = useState(0);
    const { catId } = location.state ? location.state : '';
    const [isActive, setActive] = useState(catId ? catId : 0);
    const onActiveClass = (id) => {
        setActive(id);
        // console.log(id);
        productsHandler(id);
    };
    const funcHandle = (id, name) => {
        // console.log(id, name);
    }
    useState(() => {
        // console.log(isActive);
        productsHandler(isActive);
    }, [isActive]);

    const dispatch = useDispatch();
    useState(() => {
        dispatch(actions.categories());
    }, [dispatch]);
    const categories = useSelector((state) => state.categories);

    function productsHandler(id)  {
        setLoading(true);
        const options = {
            url: window.baseURL + "/fetch_products/" + id,
            method: "GET",
        };

        axios(options)
        .then((response) => {
            setPros(response.data.data);
            setProsCount(response.data.count);
            setLoading(false);
            // console.log(response.data);
        })
        .catch((error) => {
        //   console.log(error);
          setLoading(false);
        });
    }

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
                                <Category key={1} onActiveClass={onActiveClass} id="0" isActive={isActive} select={Select} title_ru={'All'} title_en={'All'} type="all" />
                                {
                                    categories.map((row, index) => {
                                        return <Category 
                                            key={index} 
                                            id={row.id} 
                                            title_ru={row.title_ru} 
                                            title_en={row.title_en} 
                                            image={row.image}
                                            onActiveClass={onActiveClass} 
                                            isActive={isActive} />
                                        // return <Category key={index} onActiveClass={onActiveClass} isActive={isActive} id={row.id} title={row.title} type={row.type} />;
                                    })   
                                }
                            </div>
                        </div>

                        {/* Products */}
                        <div className={classes.prosContainer}>
                            <div className={classes.subTitle}>Products <div className={classes.counter}>{prosCount}</div></div>
                            
                            {
                                loading ? <LoadingGrow /> :
                                prosCount > 0 ? 
                                    <div className={classes.gridPros}>
                                    {
                                        pros.map((row, index) => {
                                            return <Product
                                                key={index} 
                                                onSelectLanguage={funcHandle} 
                                                id={row.id} 
                                                title_ru={row.title_ru} 
                                                title_en={row.title_en} 
                                                description_ru={row.description_ru} 
                                                description_en={row.description_en} 
                                                price_ru={row.price_ru}
                                                price_en={row.price_en}
                                                image={row.images} 
                                                price={row.price} 
                                                favourite={row.favourite} 
                                                // catId={row.categories.id}
                                                cat_title_ru={row.categories.title_ru}
                                                cat_title_en={row.categories.title_en}
                                                cat_image={row.categories.image}
                                                files={row.files} />;
                                        })
                                    }
                                    </div> : <div className={classes.checkerMessage}>There Are No Products Yet</div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Menu };
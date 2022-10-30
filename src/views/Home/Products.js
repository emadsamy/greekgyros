import React, {useEffect, useState, useRef} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { NavigationBar } from '../../components/index';
import { Header } from './Header';
import { Benefits } from './Benefits';
import { Categories } from './Categories';
import { Product } from '../../components/index';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import FoodBg from '../../assets/img/food_bg.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as actions from "../../store/index";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// {t('welcome')}
// {i18n.language == "ar" ? props.title_ar : props.title} 

const Products = (props) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    useState(() => {
        dispatch(actions.products());
    }, [dispatch]);
    const products = useSelector((state) => state.products);

    const funcHandle = (id, name) => {
        // console.log(id, name);
    }

    return (
        <>
            <div style={{backgroundImage: `url(${FoodBg})`}} className={classes.products}>
                <div className={`container`}>
                    <div className={`${classes.productsContainer}`}>
                        <div className={`${classes.productTitle} text-center`}>{props.title}</div>
                        <div className={classes.proGrid}>

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
                                spaceBetween={12}
                                // slidesPerView={4}
                                allowTouchMove={false}
                                breakpoints={{
                                    400: {
                                      slidesPerView: 1.2,
                                    },
                                    550: {
                                      slidesPerView: 1.5,
                                    },
                                    576: {
                                      slidesPerView: 1.6,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                    },
                                    992: {
                                      slidesPerView: 2.6,
                                    },
                                    1200: {
                                      slidesPerView: 3.3,
                                    },
                                    1400: {
                                        slidesPerView: 4,
                                    },
                                }}
                                // updateOnWindowResize
                                navigation={{
                                    prevEl: '.prev-ss-pros',
                                    nextEl: '.next-ss-pros',
                                }}
                                pagination={{ 
                                    clickable: true, 
                                }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                                loop={false}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false
                                }} 
                                speed={700}
                                className={`swiper-pros-hom`}
                            >
                                {
                                    products.map((row, index) => {
                                        return <SwiperSlide key={index} className={classes.swipersss}>
                                            <Product 
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
                                                catId={row.categories.id}
                                                cat_title_ru={row.categories.title_ru}
                                                cat_title_en={row.categories.title_en}
                                                cat_image={row.categories.image}
                                                files={row.files} />
                                        </SwiperSlide>;
                                    })
                                }
                            </Swiper>
                            <div className={`next-ss-pros arrow-s-circle ${classes.arrowSs}`}><span className={`icon-chevron-right icon ${classes.icon}`}></span></div>
                            <div className={`prev-ss-pros arrow-s-circle ${classes.arrowSs}`}><span className={`icon-chevron-left icon ${classes.icon}`}></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Products };
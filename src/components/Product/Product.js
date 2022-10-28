import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Product.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';

import FoodIc from '../../assets/img/food.png';
import Drinks from '../../assets/img/drinks.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useTranslation } from "react-i18next";
import i18next from "i18next";

// {t('welcome')}
// {i18n.language == "ru" ? props.title_ar : props.title} 

const Product = (props) => {

    const { t, i18n } = useTranslation();
    
    const handleLangChange = (id, title) => {
        props.onSelectLanguage(id, title);            
    }

    return (
        <>
            <div className={classes.product}>
                {
                    props.favourite == 'yes' ? <div className={classes.special}>EXCLUSIVE!</div> : ''
                }
                {
                    props.catId ? <NavLink to="/menu" state={{catId: props.catId}}>
                        <div className={`${classes.category} fc`}>
                            <img className={`${classes.catImg} img-fluid`} src={props.cat_image} alt="Food" />
                            <div className={classes.catTitle}>{i18n.language == "ru" ? props.cat_title_ru : props.cat_title_en}</div>
                        </div>
                    </NavLink> : ''
                }
                <div className={classes.card}>
                    <div className={classes.cardTop}>
                        <div className={classes.proView}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '',
                                    nextEl: '',
                                }}
                                pagination={{ clickable: true }}
                                // pagination={{ el: ".swiper-pagination-home", clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                loop={false}
                                // autoplay={{
                                //     delay: 3500,
                                //     disableOnInteraction: false
                                // }} 
                                speed={700}
                                className={`${classes.swiperHeader} product-swiper`}
                            >
                                {
                                    props.files.map((row, index) => {
                                        return <SwiperSlide className={classes.swiperImgs}>
                                                    <div className={classes.slideImg}>
                                                        <img 
                                                            className={`img-fluid ${classes.proImg}`} 
                                                            src={row.image} alt={i18n.language == "ru" ? props.title_ru : props.title_en} />
                                                    </div>
                                                </SwiperSlide>;
                                    })
                                }
                            </Swiper>
                        </div>

                        <div className={classes.details}>
                            <div className={classes.title}>{i18n.language == "ru" ? props.title_ru : props.title_en}</div>
                            <div className={classes.description}>{i18n.language == "ru" ? props.description_ru : props.description_en}</div>
                        </div>
                    </div>
                    <div className={classes.cardBottom}>
                        <div className={classes.priceCard}>
                            <span>Price: </span>
                            <div className={classes.price}>{i18n.language == "ru" ? props.price_ru : props.price_en} <div className={classes.currency}>RUB</div> </div> 
                        </div>
                        <div className={classes.action}>
                            <NavLink to={`/view-product/${props.title_ru.replace(/\s+/g, '-').toLowerCase()}/${props.id}`} 
                                    state={{ 
                                        proTitle: i18n.language == "ru" ? props.title_ru : props.title_en, 
                                        proId: props.id, 
                                        proImage: props.files[0].image,
                                        proDesc: i18n.language == "ru" ? props.description_ru : props.description_en
                                    }} 
                                    className={`btn main-btn`}>
                                        View More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Product };
import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Product.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Product = (props) => {
    
    const handleLangChange = (id, title) => {
        props.onSelectLanguage(id, title);            
    }

    return (
        <>
            <div className={classes.product}>
                {
                    props.fav ? <div className={classes.special}>{props.fav}</div> : ''
                }
                <NavLink to="/category">
                    <div className={`${classes.category} fc`}>
                        <img className={`${classes.catImg} img-fluid`} src={Food} alt="Food" />
                        <div className={classes.catTitle}>{props.category}</div>
                    </div>
                </NavLink>
                <div className={classes.card}>
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
                            loop={true}
                            // autoplay={{
                            //     delay: 3500,
                            //     disableOnInteraction: false
                            // }} 
                            speed={700}
                            className={`${classes.swiperHeader} product-swiper`}
                        >
                            {
                                props.image.map((row, index) => {
                                    return <SwiperSlide className={classes.swiperImgs}>
                                                <div className={classes.slideImg}>
                                                    <img className={`img-fluid ${classes.proImg}`} src={row} alt="Product" />
                                                </div>
                                            </SwiperSlide>;
                                })
                            }
                        </Swiper>
                    </div>

                    <div className={classes.details}>
                        <div className={classes.title}>{props.title}</div>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.priceCard}>
                            <span>Price: </span>
                            <div className={classes.price}>{props.price} <div className={classes.currency}>RUB</div> </div> 
                        </div>
                        <div className={classes.action}>
                            <button onClick={() => handleLangChange(props.id, props.title)} className={`btn main-btn`}> View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Product };
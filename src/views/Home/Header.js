import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import Food from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Header = (props) => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Would you like a cup of delicious Coffe? ',
            type: 'image',
            image: Coffee,
            action: true
        },

        {
            id: 2,
            title: 'Would you like a food delicious? ',
            type: 'image',
            image: Food,
            action: true
        },

        {
            id: 3,
            title: 'Would you like a pizza? ',
            type: 'image',
            image: Pizza,
            action: true
        },

        // {
        //     id: 4,
        //     title: 'Would you like a pizza? ',
        //     type: 'video',
        //     video: 'https://sawa.blob.core.windows.net/capitallords/GENHomeSlider/Videos/20034_WhatsAppVideo2020-11-23at10.01.21AM.mp4',
        //     action: true
        // },
    ]);
    return (
        <>
            <div className={classes.swiperContainer}>
                <div className={`container`}>
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
                        // speed={800}
                        className={classes.swiperHeader}
                    >
                        {
                            items.map((row, index) => {
                                return (
                                    <SwiperSlide className={classes.swiperSlide}>
                                        {
                                            row.type == 'image' ?
                                                <div style={{ backgroundImage: `url(${row.image})` }} className={classes.slideCardImg}>
                                                    <div className={classes.slideDetails}>
                                                        <div className={classes.slideTitle}>{row.title}</div>
                                                        {
                                                            row.action ? 
                                                            <div className={classes.slideAction}>
                                                                <button className={`btn main-btn`}>
                                                                     Show Now
                                                                </button>
                                                            </div> : ''
                                                        }
                                                    </div>
                                                </div>
                                            : ''
                                        }
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export { Header };
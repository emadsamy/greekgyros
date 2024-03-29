import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import classes from './ViewProduct.module.css';
import Coffee from '../../assets/img/menu/coffee.jpg';
import FoodPro from '../../assets/img/menu/food.jpeg';
import Pizza from '../../assets/img/menu/pizza.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy, Thumbs, Grid  } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import "swiper/css/grid";
import "swiper/css";
import "swiper/css/bundle";

const Items = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className={classes.swiperView}>
                <Swiper 
                    modules={[Thumbs, Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '.prev-i-pros',
                        nextEl: '.next-i-pros',
                    }}
                    >
                        {
                            props.files && props.files.map((row, index) => {
                                return <SwiperSlide key={index}><img className={`img-fluid ${classes.slideItemImg}`} src={row.image}  /></SwiperSlide>
                            })
                        }
                </Swiper>
                <div className={`next-i-pros arrow-s-circle ${classes.arrowSsNext}`}><span className={`icon-chevron-right icon ${classes.icon}`}></span></div>
                <div className={`prev-i-pros arrow-s-circle ${classes.arrowSsPrev}`}><span className={`icon-chevron-left icon ${classes.icon}`}></span></div>
            </div>

            <div className={classes.swiperThumbs}>
                <Swiper 
                    modules={[Thumbs, Grid, Pagination]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        400: {
                        //   slidesPerView: 1.2,
                        },
                        550: {
                        //   slidesPerView: 1.5,
                        },
                        576: {
                        //   slidesPerView: 1.6,
                        },
                        768: {
                        //   slidesPerView: 2,
                            spaceBetween: 10  
                        },
                        992: {
                        //   slidesPerView: 2.6,
                        },
                        1200: {
                        //   slidesPerView: 3.3,
                        },
                        1400: {
                            // slidesPerView: 4,
                        },
                    }}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    slidesPerGroup= '2'
                    direction="horizontal"
                    >
                        {
                            props.files && props.files.map((row, index) => {
                                return <SwiperSlide key={index} className={classes.itemSlideThumb}>
                                    <img className={`img-fluid ${classes.imgSlThumb}`} src={row.image} alt="thumbs" />
                                </SwiperSlide>
                            })
                        }
                </Swiper>
            </div>
        </>
    );
}

export { Items };
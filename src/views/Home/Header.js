import React, {useEffect, useState, Suspense} from 'react';
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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Loading, LoadingGrow } from '../../components/index';

// {t('welcome')}
// {i18n.language == "ar" ? props.title_ar : props.title} 

const Header = (props) => {

    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setLoading(true);
        const options = {
            url: window.baseURL + "/slider",
            method: "GET",
        };

        axios(options)
        .then((response) => {
            setSlider(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            alert(error);
          setLoading(false);
        });
    }, []);

    return (
        <>
            {
                loading ? 
                    <LoadingGrow /> 
                    : <div className={classes.swiperContainer}>
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
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                                loop={false}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false
                                }} 
                                speed={800}
                                className={classes.swiperHeader}
                            >
                                {
                                    slider.map((row, index) => {
                                        return (
                                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                                {
                                                    row.type == 'image' ?
                                                        <div style={{ backgroundImage: `url(${row.image})` }} className={classes.slideCardImg}>
                                                            <div className={classes.slideDetails}>
                                                                <div className={classes.slideTitle}>{i18n.language == "ru" ? row.title_ru : row.title_en}</div>
                                                                <div className={classes.slideAction}>
                                                                    <NavLink to="/menu" className={`btn main-btn`}>
                                                                            Show Now
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                            <div className={`gradient-easing`}></div>
                                                        </div>
                                                    : ''
                                                }

                                                {
                                                    row.type == 'video' ?
                                                        <div className={`${classes.slideCardImg}`}>
                                                            <video className={classes.videoSrc} autoPlay loop>
                                                                <source src={row.video} />
                                                                Your browser not suppot this video extension
                                                            </video>
                                                            <div className={classes.slideDetails}>
                                                                <div className={classes.slideTitle}>{i18n.language == "ru" ? row.title_ru : row.title_en}</div>
                                                                <div className={classes.slideAction}>
                                                                    <NavLink to="/menu" className={`btn main-btn`}>
                                                                            Show Now
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                            <div className={`gradient-easing`}></div>
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
            }
        </>
    );
}

export { Header };
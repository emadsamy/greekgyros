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
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Products = (props) => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Shawerma Sandwich',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [Coffee, Food, Pizza],
            price: 120,
            price_ru: 150,
            category: {title: 'Food'},
            fav: ''
        },

        {
            id: 2,
            title: 'Falafel',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [Food, Coffee, Pizza],
            price: 120,
            price_ru: 150,
            category: {title: 'Drinks'},
            fav: 'Best!'
        },

        {
            id: 3,
            title: 'Pizza & Pasta',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            images: [Pizza, Food, Coffee],
            price: 120,
            price_ru: 150,
            category: {title: 'Shawerma'},
            fav: ''
        },
    ]);

    const funcHandle = (id, name) => {
        console.log(id, name);
    }

    return (
        <>
            <div style={{backgroundImage: `url(${FoodBg})`}} className={classes.products}>
                <div className={`container`}>
                    <div className={`${classes.productsContainer}`}>
                        <div className={`${classes.productTitle} text-center`}>Our Products</div>
                        <div className={classes.proGrid}>

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
                                spaceBetween={12}
                                slidesPerView={4}
                                updateOnWindowResize
                                navigation={{
                                    prevEl: '',
                                    nextEl: '',
                                }}
                                pagination={{ 
                                    clickable: true, 
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                loop={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false
                                }} 
                                speed={700}
                                className={`swiper-pros-hom`}
                            >
                                {
                                    items.map((row, index) => {
                                        return <SwiperSlide className={classes.swipersss}>
                                            <Product onSelectLanguage={funcHandle} id={row.id} title={row.title} description={row.description} category={row.category.title} image={row.images} price={row.price} fav={row.fav} />
                                        </SwiperSlide>;
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Products };
import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './ViewProduct.module.css';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";
import { Product, Share } from '../../components/index';
import { Items } from './Items';
import { OtherItems } from './OtherItems';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Loading, LoadingGrow } from '../../components/index';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as actions from "../../store/index";

// {t('welcome')}
// {i18n.language == "ar" ? props.title_ar : props.title} 


const ViewProduct = (props) => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const {id} = useParams();
    // const { proTitle } = location.state;
    // const { proDesc } = location.state;
    // const { proId } = location.state;
    // const { proImage } = location.state;
    const [shareModal, setShareModal] = useState(false);
    const [deliveryModal, setDeliveryModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState('');

    const dispatch = useDispatch();
    useState(() => {
        dispatch(actions.settings());
    }, [dispatch]);
    const settings = useSelector((state) => state.settings);

    useEffect(() => {
        productsHandler(id);
    }, [id]);

    function productsHandler(id)  {
        setLoading(true);
        const options = {
            url: window.baseURL + "/get_product/" + id,
            method: "GET",
        };

        axios(options)
        .then((response) => {
            setProduct(response.data.data);
            setLoading(false);
            // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }

    return (
        <>
            <Helmet>
                <title>{i18n.language == "ru" ? product.title_ru : product.title_en}</title>
            </Helmet>
            <NavigationBar deliveryModal={deliveryModal} onHide={() => setDeliveryModal(false)} />
            <Share 
                    show={shareModal} 
                    onHide={() => setShareModal(false)} 
                    img={product ? product.files[0].image : ''} 
                    title={i18n.language == "ru" ? product.title_ru : product.title_en}
                    description={i18n.language == "ru" ? product.description_ru : product.description_en} />
                    
            <div className={classes.menu}>
                <div className={classes.wrapperContainer}>
                    <div className={classes.breadcrumbHeader}>
                        <div className={`container ${classes.wrapperContainer}`}>
                            <div className={`${classes.flexableHeader} fcsb`}>
                                <div className={classes.breadcrumb}>
                                    <div className={classes.breadLi}><NavLink to="/">Home / </NavLink></div>
                                    <div className={classes.breadLi}><NavLink to="/menu">Menu / </NavLink></div>
                                    <div className={` ${classes.breadLiActive}`}>{i18n.language == "ru" ? product.title_ru : product.title_en}</div>
                                </div>
                                <div className={`${classes.shareBtn} fc`}>
                                    <button onClick={() => setShareModal(true)} className={`btn gray-btn`}><span className={`icon-share icon`}></span> Share</button>
                                    {
                                        settings.phone ?
                                            <a href={`tel:${settings.phone}`} title={settings.phone} className={`btn main-btn ${classes.callBtn}`}>
                                                <span className={`icon-call icon`}></span>
                                            </a> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`container`}>
                        <div className={classes.productDetials}>
                            {loading ? <LoadingGrow /> : <div className={classes.swiperGrid}><Items files={product.files} /></div>}
                            <div className={classes.details}>
                                <div className={classes.itemTitle}>{i18n.language == "ru" ? product.title_ru : product.title_en}</div>
                                <div className={classes.itemDesc}>{i18n.language == "ru" ? product.description_ru : product.description_en}</div>
                                <div className={classes.priceCard}>
                                    <span>Price: </span>
                                    <div className={classes.price}>{i18n.language == "ru" ? product.price_ru : product.price_en} <div className={classes.currency}>RUB</div> </div> 
                                </div>
                                <button onClick={() => setDeliveryModal(true)} className={`btn main-btn`}><span className={`icon-delivery icon`}></span> Delivery</button>
                            </div>
                        </div>

                        <div className={classes.otherItems}>
                            <OtherItems title="You Can View Other Products." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { ViewProduct };
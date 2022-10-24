import React, {useEffect, useState} from 'react';
import {Route, Switch, NavLink, Navigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import classes from './ViewProduct.module.css';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";
import { Product, Share } from '../../components/index';
import { Items } from './Items';
import { OtherItems } from './OtherItems';

const ViewProduct = (props) => {
    const location = useLocation();
    const { proTitle } = location.state;
    const { proDesc } = location.state;
    const { proId } = location.state;
    const { proImage } = location.state;
    const [shareModal, setShareModal] = useState(false);
    const [deliveryModal, setDeliveryModal] = useState(false);

    return (
        <>
            <Helmet>
                <title>{proTitle}</title>
            </Helmet>
            <NavigationBar deliveryModal={deliveryModal} onHide={() => setDeliveryModal(false)} />
            <Share show={shareModal} onHide={() => setShareModal(false)} img={proImage} title={proTitle} />
            <div className={classes.menu}>
                <div className={classes.wrapperContainer}>
                    <div className={classes.breadcrumbHeader}>
                        <div className={`container ${classes.wrapperContainer}`}>
                            <div className={`${classes.flexableHeader} fcsb`}>
                                <div className={classes.breadcrumb}>
                                    <div className={classes.breadLi}><NavLink to="/">Home / </NavLink></div>
                                    <div className={classes.breadLi}><NavLink to="/menu">Menu / </NavLink></div>
                                    <div className={` ${classes.breadLiActive}`}>{proTitle}</div>
                                </div>
                                <div className={`${classes.shareBtn} fc`}>
                                    <button onClick={() => setShareModal(true)} className={`btn gray-btn`}><span className={`icon-share icon`}></span> Share</button>
                                    <a href="tel:071234567890" className={`btn main-btn ${classes.callBtn}`}><span className={`icon-call icon`}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`container`}>
                        <div className={classes.productDetials}>
                            <div className={classes.swiperGrid}>
                                <Items />
                            </div>
                            <div className={classes.details}>
                                <div className={classes.itemTitle}>{proTitle}</div>
                                <div className={classes.itemDesc}>{proDesc}</div>
                                <div className={classes.priceCard}>
                                    <span>Price: </span>
                                    <div className={classes.price}>150 <div className={classes.currency}>RUB</div> </div> 
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
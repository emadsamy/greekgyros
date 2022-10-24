import React, {useEffect, useState, Suspense} from 'react';
import {Route, Switch, NavLink, Navigate} from 'react-router-dom';
import axios from 'axios';
import classes from './Contact.module.css';
import { NavigationBar, Footer } from '../../components/index';
import {Helmet} from "react-helmet";

const Contact = (props) => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <NavigationBar />
            <div className={classes.contact}>
                <div className={classes.wrapperContainer}>
                    <div className={classes.breadcrumbHeader}>
                        <div className={`container ${classes.wrapperContainer}`}>
                            <div className={classes.breadcrumb}>
                                <div className={classes.breadLi}><NavLink to="/">Home / </NavLink></div>
                                <div className={` ${classes.breadLiActive}`}>Contact Us</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contactContainer}>
                        <div className={classes.location}>
                            <div className={`container`}>
                                <div className={classes.mainTitle}>Our Address</div>
                                <div className={classes.map}>
                                    <Suspense fallback="Loading...">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.70987306157!2d30.655057484613444!3d59.93922589518761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z2LPYp9mG2Kog2KjYt9ix2LPYqNix2LrYjCDYsdmI2LPZitin!5e0!3m2!1sar!2seg!4v1666358041095!5m2!1sar!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </Suspense>
                                </div>
                            </div>
                        </div>

                        <div className={classes.detailsBg}>
                            <div className={`container`}>
                                <div className={classes.details}>
                                    <div className={`${classes.grid}`}>
                                        <div className={classes.left}>
                                            <div className={classes.subTitle}>Let's talk with us.</div>
                                            <div className={classes.desc}>
                                                Get all the information and support you need.<br /> Fill up our form and our team will get back to you within 24 hours.
                                            </div>
                                            <div className={classes.locationDetails}>
                                                <div className={classes.subTitle2}>Contact Info</div>
                                                <div className={classes.locationRow}>
                                                    <a className={`${classes.liRow} fc`} href="tel:71234567901">
                                                        <span className={`icon-call ${classes.locationIcon}`}></span>
                                                        <div className={classes.lrValue}>(+7) 123-4567-901</div>
                                                    </a>
                                                </div>

                                                <div className={classes.locationRow}>
                                                    <a className={`${classes.liRow} fc`} href="mailto:example@example.com">
                                                        <span className={`icon-email ${classes.locationIcon}`}></span>
                                                        <div className={classes.lrValue}>example@example.com</div>
                                                    </a>
                                                </div>

                                                <div className={classes.locationRow}>
                                                    <a className={`${classes.liRow} fc`} href="https://www.google.com/maps?ll=59.940414,30.094672&z=8&t=m&hl=ar&gl=EG&mapclient=embed&q=%D8%B3%D8%A7%D9%86%D8%AA+%D8%A8%D8%B7%D8%B1%D8%B3%D8%A8%D8%B1%D8%BA+%D8%B1%D9%88%D8%B3%D9%8A%D8%A7" target={'_blank'}>
                                                        <span className={`icon-location ${classes.locationIcon}`}></span>
                                                        <div className={classes.lrValue}>Russia, San Petersburgo.</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classes.right}>
                                            <form>
                                                <div className={classes.form}>
                                                    <div className={`form-group-row`}>
                                                        <label className={'fgr-label'}>Full Name</label>
                                                        <div className={'fgrinp'}>
                                                            <input className={`fgr-input`} type="text" placeholder="Enter your full name " />
                                                        </div>
                                                    </div>

                                                    <div className={`form-group-row`}>
                                                        <label className={'fgr-label'}>Phone Number</label>
                                                        <div className={'fgrinp'}>
                                                            <input className={`fgr-input`} type="text" placeholder="Enter your phone number" />
                                                        </div>
                                                    </div>

                                                    <div className={`form-group-row`}>
                                                        <label className={'fgr-label'}>Email</label>
                                                        <div className={'fgrinp'}>
                                                            <input className={`fgr-input`} type="email" placeholder="Enter your email" />
                                                        </div>
                                                    </div>

                                                    <div className={`form-group-row`}>
                                                        <label className={'fgr-label'}>Message</label>
                                                        <div className={'fgrinp'}>
                                                            <textarea className={`fgr-input`} placeholder="Write your message">

                                                            </textarea>
                                                        </div>
                                                    </div>

                                                    <div className={classes.action}>
                                                        <button className={`btn main-btn`}>Contact Us</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Contact };
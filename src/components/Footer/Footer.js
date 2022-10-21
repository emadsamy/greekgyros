import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Footer.module.css';
import Logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <>
            <footer className={classes.footer}>
                <div className={`${classes} container`}>
                    <div className={`${classes.grid}`}>
                        <div className={classes.logo}>
                            <NavLink to="/" className={`fc`}>
                                <img className={`img-fluid ${classes.logoImg}`} src={Logo} alt={'Greek Gyros'} />
                            </NavLink>
                        </div>
                        <div className={classes.links}>
                            <div className={classes.footerTitle}>Services</div>
                            <div className={classes.link}><NavLink to="/">Home</NavLink></div>
                            <div className={classes.link}><NavLink to="/menu">Menu</NavLink></div>
                            <div className={classes.link}><NavLink to="/about">About</NavLink></div>
                            <div className={classes.link}><NavLink to="/contact">Contact</NavLink></div>
                        </div>
                        <div className={classes.links}>
                            <div className={classes.footerTitle}>Products</div>
                            <div className={classes.link}><NavLink to="/categories">Categories</NavLink></div>
                            <div className={classes.link}><NavLink to="/menu">Menu</NavLink></div>
                        </div>
                        <div className={classes.socialmedia}>
                            <div className={classes.footerTitle}>Follow Us</div>
                            <div className={`${classes.socialIcons} fc`}>
                                <div className={classes.icon}>
                                    <a href='https://www.facebook.com' target="_blank">
                                        <span className={`icon-facebook`}></span>
                                    </a>
                                </div>

                                <div className={classes.icon}>
                                    <a href='https://www.youtube.com' target="_blank">
                                        <span className={`icon-twitter`}></span>
                                    </a>
                                </div>

                                <div className={classes.icon}>
                                    <a href='https://www.instagram.com' target="_blank">
                                        <span className={`icon-instagram`}></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={classes.copyright}>© 2022 Greek Gyros, All Rights Received.</div>
        </>
    );
}

export { Footer };
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationBar.module.css';
import Logo from '../../assets/img/logo.png';
import { Delivery, Search } from '../index';

const NavigationBar = () => {
    const [deliveryModal, setDeliveryModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    return (
        <>
            <Delivery show={deliveryModal} onHide={() => setDeliveryModal(false)} />
            <Search show={searchModal} onHide={() => setSearchModal(false)} />
            <nav>
                <div className={classes.navContainer}>
                    <div className={`container`}>
                        <div className={classes.flexable}>
                            <div className={classes.left}>
                                <NavLink to="/" className={`${classes.logo} fc`}>
                                    <img className={classes.logoImg} src={Logo} alt={'Greek Gyros'} />
                                    <div className={classes.brandTitle}>Greek Gyros</div>
                                </NavLink>
                            </div>
                            <div className={classes.right}>
                                <div className={`${classes.items} fc`}>
                                    <div className={classes.item}><NavLink to="/menu">Menu</NavLink></div>
                                    <div className={classes.item}><NavLink to="/about">About</NavLink></div>
                                    <div className={classes.item}><NavLink to="/contact">Contact</NavLink></div>
                                    <div className={classes.item}>
                                        <button onClick={() => setSearchModal(true)} className={`btn ${classes.searchIcon}`}><span className={`icon-search icon ${classes.icon}`}></span></button>
                                    </div>
                                    <div className={classes.item}>
                                        <button onClick={() => setDeliveryModal(true)} className={`btn main-btn`}><span className={`icon-delivery icon`}></span> Delivery</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { NavigationBar };
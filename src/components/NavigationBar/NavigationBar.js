import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationBar.module.css';
import Logo from '../../assets/img/logo.png';
import { Delivery, Search } from '../index';
import Select from 'react-select';
import Ru from '../../assets/img/flags/ru.svg';
import Us from '../../assets/img/flags/us.svg';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavigationBar = (props) => {
    const { t, i18n } = useTranslation();
    const [deliveryModal, setDeliveryModal] = useState(false);
    const [burger, setBurger] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const options = [
        { value: 'ru', label: <div className={classes.flag}><img src={Ru} /> <span>Russian</span> </div>},
        { value: 'en', label: <div className={classes.flag}><img src={Us} /> <span>English</span> </div>},
    ];
    const [selectedOption, setSelectedOption] = useState();

    const changeLanguage = (event) => { 
        i18n.changeLanguage(event.value);
        const bodyEl = document.body;
        if (event.value == "ru") {
          bodyEl.classList.add("rtl-dir");
        } else {
          bodyEl.classList.remove("rtl-dir");
        }
      };
      if (localStorage.getItem("i18nextLng")) {
        const bodyEl = document.body;
        if (localStorage.getItem("i18nextLng") == "ru") {
          bodyEl.classList.add("rtl-dir");
        } else {
          bodyEl.classList.remove("rtl-dir");
        }
      }

    return (
        <>
            <Delivery show={deliveryModal || props.deliveryModal} onHide={() => setDeliveryModal(false) || props.onHide()} />
            <Search show={searchModal} onHide={() => setSearchModal(false)} />
            <nav>
                <div className={classes.navContainer}>
                    <div className={`container`}>
                        <div className={classes.flexable}>
                            <div className={classes.left}>
                                <NavLink to="/" className={`${classes.logo} fc`}>
                                    <img className={classes.logoImg} src={Logo} alt={'Greek Gyros'} />
                                    <div className={classes.brandTitle}>{t('brand-title')}</div>
                                </NavLink>
                            </div>
                            <div className={classes.right}>
                                <div className={`${classes.items} fc`}>
                                    <div onClick={() => setBurger(false)} className={`${classes.backdrop} ${burger ? classes.open : ''}`}></div>
                                    <div className={`${classes.itemsContainer} ${burger ? classes.open : ''} fc`}>
                                        <div className={`${classes.icTop} fcsb`}>
                                            <img className={classes.logoImg} src={Logo} alt={'Greek Gyros'} />
                                            <div onClick={() => setBurger(false)} className={`${classes.close} fcc`}><span className={`icon-cancel ${classes.icon}`}></span></div>
                                        </div>
                                        {/* className={(state) => state.isActive ? classes.active : ''} */}
                                        <div className={classes.item}><NavLink to="/">{t('home-title')}</NavLink></div>
                                        <div className={classes.item}><NavLink to="/menu">{t('menu-title')}</NavLink></div>
                                        <div className={classes.item}><NavLink to="/about">{t('about-title')}</NavLink></div>
                                        <div className={classes.item}><NavLink to="/contact">{t('contact-title')}</NavLink></div>
                                    </div>
                                    <div className={`${classes.item} ${classes.itemSearch}`}>
                                        <button onClick={() => setSearchModal(true)} className={`btn ${classes.searchIcon}`}><span className={`icon-search icon ${classes.icon}`}></span></button>
                                    </div>
                                    <div className={classes.item}>
                                        <button onClick={() => setDeliveryModal(true)} className={`btn main-btn ${classes.delBtn}`}><span className={`icon-delivery icon`}></span> {t('delivery-title')}</button>
                                    </div>
                                    {/* <div>
                                        {t('welcome')}
                                        {i18n.language == "ar" ? props.title_ar : props.title} // check By This
                                    </div> */}
                                    <div className={classes.item}>
                                        <Select 
                                            className={classes.selecctLang} 
                                            onChange={changeLanguage} 
                                            // () => changeLanguage() i18next.language == "ru" ? "en" : "ru"
                                            isSearchable={false} options={options} 
                                            defaultValue={i18next.language == "ru" ? options[0] : options[1]}
                                             />  
                                    </div>
                                    <div onClick={() => setBurger(!burger)} className={`${classes.burger} ${burger ? classes.open : ''}`}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
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
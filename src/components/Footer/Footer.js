import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import Logo from "../../assets/img/logo.png";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from "../../store/index";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  useState(() => {
    dispatch(actions.settings());
  }, [dispatch]);
  const settings = useSelector((state) => state.settings);

  return (
    <>
      <footer className={classes.footer}>
        <div className={`${classes} container`}>
          <div className={`${classes.grid}`}>
            <div className={classes.logo}>
              <NavLink to="/" className={`fc`}>
                <img className={`img-fluid ${classes.logoImg}`} src={Logo} alt={"Greek Gyros"} />
              </NavLink>
            </div>
            <div className={classes.links}>
              <div className={classes.footerTitle}>Services</div>
              <div className={classes.link}>
                <NavLink to="/">Home</NavLink>
              </div>
              <div className={classes.link}>
                <NavLink to="/about">About</NavLink>
              </div>
              <div className={classes.link}>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
            <div className={classes.links}>
              <div className={classes.footerTitle}>Products</div>
              <div className={classes.link}>
                <NavLink to="/menu">Menu</NavLink>
              </div>
            </div>
            <div className={classes.socialmedia}>
              <div className={classes.footerTitle}>Follow Us</div>
              <div className={`${classes.socialIcons} fc`}>
                {settings.facebook ? (
                  <div className={classes.icon}>
                    <a href={settings.facebook} target="_blank">
                      <span className={`icon-facebook`}></span>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {settings.youtube ? (
                  <div className={classes.icon}>
                    <a href={settings.youtube} target="_blank">
                      <span className={`icon-youtube`}></span>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {settings.instagram ? (
                  <div className={classes.icon}>
                    <a href={settings.instagram} target="_blank">
                      <span className={`icon-instagram`}></span>
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={classes.locationDetails}>
                {settings.phone ? (
                  <div className={classes.locationRow}>
                    <a className={`${classes.liRow} fc`} href={`tel:${settings.phone}`}>
                      <span className={`icon-call ${classes.locationIcon}`}></span>
                      <div className={classes.lrValue}>{settings.phone}</div>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {settings.email ? (
                  <div className={classes.locationRow}>
                    <a className={`${classes.liRow} fc`} href={`mailto:${settings.email}`}>
                      <span className={`icon-email ${classes.locationIcon}`}></span>
                      <div className={classes.lrValue}>{settings.email}</div>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                <div className={classes.locationRow}>
                  <a
                    className={`${classes.liRow} fc`}
                    href="https://www.google.com/maps?ll=59.940414,30.094672&z=8&t=m&hl=ar&gl=EG&mapclient=embed&q=%D8%B3%D8%A7%D9%86%D8%AA+%D8%A8%D8%B7%D8%B1%D8%B3%D8%A8%D8%B1%D8%BA+%D8%B1%D9%88%D8%B3%D9%8A%D8%A7"
                    target={"_blank"}
                  >
                    <span className={`icon-location ${classes.locationIcon}`}></span>
                    <div className={classes.lrValue}>Russia, San Petersburgo.</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={classes.copyright}>© 2023 Greek Gyros, All Rights Received.</div>
    </>
  );
};

export { Footer };

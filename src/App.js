import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import classes from './App.module.css';
import { Home, Error404, Contact, Menu, ViewProduct } from './views/index';
import { ScrollToTop } from './components/index';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const [ip, setIP] = useState('');
  const { t, i18n } = useTranslation();

  const getIp = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    // console.log(res.data);
    setIP(res.data);
  }
  
  useEffect( () => {
    getIp();
  }, []);

  useEffect( () => {
    visitorHandler();
  }, [ip]);

  function visitorHandler () {
    const options = {
        url: window.baseURL + "/visitors",
        method: "POST",
        data: {
            ip: ip.IPv4,
            country_code: ip.country_code,
            country_name: ip.country_name,
            lat: ip.latitude,
            lng: ip.longitude,
            language: i18n.language
        },
    };

    axios(options)
    .then((res) => {
        // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    });
}


  return (
    <div className={classes.wrapperContainer}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/view-product/:title/:id" element={<ViewProduct />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;

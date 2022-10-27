import * as actionType from './actionTypes';
import axios from 'axios';

export const catsAction = (categories) => {
    return {
        type: actionType.CATEGORIES,
        categories: categories,
    }
}

export const categories = () => {
    return (dispatch) => {
        
        const options = {
            url: window.baseURL + "/categories",
            method: "GET",
        };

        axios(options)
        .then((response) => {
            dispatch(catsAction(response.data.data));
            // console.log(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
}

export const prosAction = (products) => {
    return {
        type: actionType.PRODUCTS,
        products: products,
    }
}

export const products = () => {
    return (dispatch) => {
        
        const options = {
            url: window.baseURL + "/products",
            method: "GET",
        };

        axios(options)
        .then((response) => {
            dispatch(prosAction(response.data.data));
            // console.log(response.data);
        })
        .catch((error) => {
            alert(error);
        });
    }
}

export const settAction = (settings) => {
    return {
        type: actionType.SETTINGS,
        settings: settings,
    }
}

export const settings = () => {
    return (dispatch) => {
        
        const options = {
            url: window.baseURL + "/settings",
            method: "GET",
        };

        axios(options)
        .then((response) => {
            dispatch(settAction(response.data.data));
            // console.log(response.data);
        })
        .catch((error) => {
            alert(error);
        });
    }
}
import * as actionTypes from "./actionTypes";

const initalState = {
    loading: false,
    categories: [],
    products: [],
    settings: {},
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
            }

        case actionTypes.CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
            
        case actionTypes.PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        case actionTypes.SETTINGS:
            return {
                ...state,
                settings: action.settings
            }

        default :
        return {...state}
    }
}

export { reducer };
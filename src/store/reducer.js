import * as actionTypes from "./actionTypes";

const initalState = {
    loading: false
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
            }

        default :
        return {...state}
    }
}

export { reducer };
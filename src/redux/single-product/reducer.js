import {PRODUCT_DETAILS_LOADING, PRODUCT_DETAILS_LOADED, GET_DETAILS} from "./type";

const initialState={
    products:[],
    size: '',
    sort: '',
    load:false
}

export const productDetailsReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GET_DETAILS:
            return  {...state,products: action.payload}
        case PRODUCT_DETAILS_LOADING:
            return  {...state,load: true}
        case PRODUCT_DETAILS_LOADED:
            return  {...state,load:false}
        default:
            return state;
    }
};

import {PRODUCT_LIST_REQUEST} from "./type";

const initialState={
    products:[],
    size: '',
    sort: ''
}
export const  productListReducer=(state=initialState,{type,payload})=>{
    switch (type){
        case PRODUCT_LIST_REQUEST:
            return {
                ...state, products: payload
            }
        default : return state;
    }
}
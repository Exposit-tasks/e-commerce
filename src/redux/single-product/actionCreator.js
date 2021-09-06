import {PRODUCT_DETAILS_LOADING, PRODUCT_DETAILS_LOADED, GET_DETAILS} from "./type";
import {DB} from '../../core/axios'


const getProductDetails = (payload) => {
    return {
        type: GET_DETAILS,
        payload
    }
}

const loading = () => {
    return {
        type: PRODUCT_DETAILS_LOADING

    }
}
const loaded = () => {
    return {
        type: PRODUCT_DETAILS_LOADED

    }
}

 export const detailsProduct = (productId) => async (dispatch) => {
    dispatch(loading())
    await DB(`/products?id=${productId}`).then(({data}) =>
        dispatch(getProductDetails(data[0]))
    )
    dispatch(loaded())
}
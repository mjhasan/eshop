import { actionsTypes } from "../constants/actionsType";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
}

const selectedProductState = {product: {}}
export const selectedProductReducer = (state = selectedProductState, { type, payload }) => {
    switch (type) {
        case actionsTypes.SELECTED_PRODUCT:
            return { ...state, product: payload };
        case actionsTypes.REMOVE_SELECTED_PRODUCT:
            return state = {product: {}};
        default:
            return state;
    }
}
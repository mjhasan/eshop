import { actionsTypes } from "../constants/actionsType"

export const setProducts = (products) => {
    return {
        type: actionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionsTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: actionsTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}


import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { setProducts } from '../../redux/actions/productActions'

const Home = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
    const getProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts((response.data)));
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className=" ui grid container">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Home;
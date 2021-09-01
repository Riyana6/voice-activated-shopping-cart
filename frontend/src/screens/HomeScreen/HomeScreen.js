import './HomeScreen.css'
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

//components
import Product from '../../components/Product/Product'

//actions
import {getProducts as listProducts} from "../../redux/actions/productActions"

export default function HomeScreen() {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const {products,loading, error} = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>loading...</h2>
                ) : error ? (
                    <h2> {error}</h2> 
                ) : (
                    products.map((product) => 
                    <Product
                        key={product._id}
                        productId={product._id}  
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

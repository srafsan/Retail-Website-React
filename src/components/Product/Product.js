import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - Order soon.</small></p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;
    }

    let shipping = 0;
    if (total > 0)
        shipping = 12.99;
    else if (total > 15)
        shipping = 4.99;

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = formatNumber(total / 10);
    const grandTotal = formatNumber(total + shipping + Number(tax));

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;
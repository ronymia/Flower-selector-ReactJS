import React from 'react';
import { BsTrash } from 'react-icons/bs';
import './Cart.css';

export default function Cart({ cart }) {
    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <div>
                <h2>Selected items : {cart.length}</h2>
                {
                    cart.map(product =>
                        <div key={product.id} className="cart-product">
                            <figure>
                                <img src={product.img} alt="" />
                            </figure>
                            <div >
                                <h3 className="cart-product__name">{product.name}</h3>
                                <p className="cart-product__price">price : ${product.price}</p>
                            </div>
                            <div className="icons">
                                <BsTrash className='' />
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <button type="button" className="cart--btn-offer">Choose 1 for me</button>
                <button type="button">Choose again</button>
            </div>
        </div>
    )
}

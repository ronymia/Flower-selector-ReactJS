import React, { useEffect, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import './Cart.css';

export default function Cart({ cart, setCart }) {
    const [offer, setOffer] = useState(false);

    useEffect(() => {
        if (cart.length > 1) {
            setOffer(true);
        } else {
            setOffer(false);
        }
    }, [cart]);

    const removeItem = (selectedProduct) => {
        let restItems = [];
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        restItems = [...rest];
        // set cart items
        setCart(restItems)
    }

    const randomSelectItem = () => {
        const random = Math.floor(Math.random() * cart.length);
        const items = [(cart[random])];
        //set cart items
        setCart(items);
    }

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
                                <BsTrash onClick={() => removeItem(product)} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <button type="button"
                    className="cart--btn-offer"
                    onClick={randomSelectItem}
                    disabled={!offer}
                >Choose 1 for me</button>
                <button type="button" onClick={() => setCart([])}>Choose again</button>
            </div>
        </div>
    )
}

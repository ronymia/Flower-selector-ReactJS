import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (selectedProduct) => {
        let newCart = [...cart, selectedProduct]
        setCart(newCart)
    }

    return (
        <section className="container">
            <section className="shop-container">
                {
                    products.map(product =>
                        <article key={product.id} className="product">
                            <figure>
                                <img src={product.img} alt="" />
                            </figure>
                            <div className="product__details">
                                <h3>{product.name}</h3>
                                <p>${product.price} <del><span>$15.99</span></del></p>
                            </div>
                            <button type="button"
                                className="product__btn"
                                onClick={() => addToCart(product)}
                            >Add To Cart <MdAddShoppingCart className="btn__icon" /> </button>
                        </article>)
                }
            </section>
            <aside className="cart-container">
                <Cart cart={cart} />
            </aside>
        </section>
    )
}
import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className="container">
            <section className="shop-container">
                {
                    products.map(product =>
                        <article className="product">
                            <figure>
                                <img src={product.img} alt="" />
                            </figure>
                            <div className="product__details">
                                <h3>{product.name}</h3>
                                <p>${product.price} <del><span>$15.99</span></del></p>
                            </div>
                            <button type="button"
                                className="product__btn"
                            >Add To Cart</button>
                        </article>)
                }
            </section>
            <aside className="cart-container">
                <h1>cart</h1>
            </aside>
        </section>
    )
}
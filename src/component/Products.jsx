import React from 'react'
import { products, list } from '../data'
import styles from "./Product.module.css"
function Products() {

    return (
        <section id='products'>
            <div className={styles.products_title}>
                <h1>Bestsellers Products</h1>
                <div className={styles.brand_names}>
                    {products.map((item) => (
                        <button key={item.id}>{item.name}</button>
                    ))}
                </div>
            </div>

            <div className={styles.items}>
                {list.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.name} />
                        <p className={styles.gender}>{item.category}</p>
                        <p className={styles.shoetype}>{item.shoeType}</p>
                        <p className={styles.price}>{item.price}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Products

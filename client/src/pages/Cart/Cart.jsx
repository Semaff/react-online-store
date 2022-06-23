import React from 'react';
import { Table, Timeline, Total } from '../../containers';
import "./Cart.scss"

const Cart = () => {
    return (
        <>
            <Timeline page="Cart" />

            <section className="section  --fullPadding">
                <div className="container">
                    <div className="cart">
                        <Table />
                        <Total />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart;
import React from 'react';
import { CartTable, Timeline, Total } from '../../containers';
import "./Cart.scss"

const Cart = () => {
    return (
        <>
            <Timeline page="Cart" />

            <section className="section  --fullPadding">
                <div className="container">
                    <div className="cart">

                        <div className="cart__content">
                            <CartTable />

                            <div className="cart__btns">
                                <input type="text" className='cart__btns-input' placeholder='Coupon code' />
                                <button className="btn --black --poppins">Apply coupon</button>
                            </div>
                        </div>

                        <Total />

                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart;
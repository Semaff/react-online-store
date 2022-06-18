import React from 'react';
import { CartTable, CartTotal, Timeline } from '../../containers';
import "./Cart.scss"

const Cart = () => {
    return (
        <>
            <Timeline page="Cart" />

            <section className="cart">
                <div className="container">
                    <div className="cart__inner">

                        <div className="cart__content">
                            <CartTable />

                            <div className="cart__btns">
                                <input type="text" className='cart__btns-input' placeholder='Coupon code' />
                                <button className="btn --black --poppins">Apply coupon</button>
                            </div>
                        </div>

                        <CartTotal />

                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart;
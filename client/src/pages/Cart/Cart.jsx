import React from 'react';
import { Remove } from '../../components/_SVG';
import { Timeline } from '../../containers';
import "./Cart.scss"

const Cart = () => {
    return (
        <>
            <Timeline page="Cart" />

            <section className="cart">
                <div className="container">
                    <div className="cart__inner">

                        <div className="cart__content">

                            <div className="cart__table-responsive">
                                <table className="cart__table">
                                    <thead>
                                        <tr className='cart__table-header'>
                                            <th className='cart__table-title'>Remove</th>
                                            <th className='cart__table-title'>Images</th>
                                            <th className='cart__table-title'>Products</th>
                                            <th className='cart__table-title'>Prices</th>
                                            <th className='cart__table-title'>Quantity</th>
                                            <th className='cart__table-title'>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <button type='button' className='cart__table-remove'><Remove /></button>
                                            </td>
                                            <td>
                                                <img src='./images/product-2.jpg' alt='2' className='cart__table-img' />
                                            </td>

                                            <td className='cart__table-desc'>Aliquam quaerat voluptatem</td>
                                            <td className='cart__table-price'>$100.00</td>

                                            <td>
                                                <input type="number" defaultValue={1} className='cart__table-quantity' />
                                            </td>

                                            <td className='cart__table-price'>$100.00</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <button type='button' className='cart__table-remove'><Remove /></button>
                                            </td>
                                            <td>
                                                <img src='./images/product-1.jpg' alt='1' className='cart__table-img' />
                                            </td>

                                            <td className='cart__table-desc'>Aliquam quaerat voluptatem</td>
                                            <td className='cart__table-price'>$100.00</td>

                                            <td>
                                                <input type="number" defaultValue={1} className='cart__table-quantity' />
                                            </td>

                                            <td className='cart__table-price'>$100.00</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <button type='button' className='cart__table-remove'><Remove /></button>
                                            </td>
                                            <td>
                                                <img src='./images/product-3.jpg' alt='3' className='cart__table-img' />
                                            </td>

                                            <td className='cart__table-desc'>Aliquam quaerat voluptatem</td>
                                            <td className='cart__table-price'>$100.00</td>

                                            <td>
                                                <input type="number" defaultValue={1} className='cart__table-quantity' />
                                            </td>

                                            <td className='cart__table-price'>$100.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="cart__btns">
                                <input type="text" className='cart__btns-input' placeholder='Coupon code' />
                                <button className="btn --black --poppins">Apply coupon</button>
                            </div>
                        </div>

                        <div className="cart__total">
                            <h3 className="cart__total-header">Cart Totals</h3>

                            <div className="cart__total-content">

                                <div className="cart__total-row">
                                    <b>Subtotal</b>
                                    <p>$160.00</p>
                                </div>

                                <div className="cart__total-row">
                                    <b>Shipping</b>
                                    <p>Flat Rate: $5.00</p>
                                </div>

                                <div className="cart__total-row">
                                    <p>Calculate shipping</p>
                                </div>

                            </div>

                            <div className="cart__total-footer">
                                <div className="cart__total-row">
                                    <b>Total</b>
                                    <p>$165.00</p>
                                </div>
                            </div>

                            <button className="btn  --black  --poppins" style={{ width: '100%' }}>Proceed To Checkout</button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart;
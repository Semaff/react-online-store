import { Timeline } from "../../containers";
import "./Checkout.scss"

const Checkout = () => {
    return (
        <>
            <Timeline page="Checkout" />

            <section className="checkout">
                <div className="container">

                    <div className="checkout__inner">
                        <div className="checkout__payment">
                            <h3 className="checkout__title">Billing address</h3>

                            <div className="checkout__payment-content">

                                <div className="input__flexbox">
                                    <div className="input__placeholder">
                                        <label htmlFor="firstname" className="label  --important">First name</label>
                                        <input type="text" className="input" name="firstname" id="firstname" />
                                    </div>

                                    <div className="input__placeholder">
                                        <label htmlFor="lastname" className="label  --important">Last name</label>
                                        <input type="text" className="input" name="lastname" id="lastname" />
                                    </div>
                                </div>

                                <div className="input__placeholder">
                                    <label htmlFor="username" className="label  --important">Username</label>
                                    <input type="text" className="input" name="username" id="username" placeholder="Username" />
                                </div>

                                <div className="input__placeholder">
                                    <label htmlFor="email" className="label">Email (Optional)</label>
                                    <input type="email" className="input" name="email" id="email" placeholder="you@example.com" />
                                </div>

                                <div className="input__placeholder">
                                    <label htmlFor="address" className="label  --important">Address</label>
                                    <input type="text" className="input" name="address" id="address" placeholder="1234 Main St" />
                                </div>

                                <div className="input__placeholder">
                                    <label htmlFor="address2" className="label">Address 2 (Optional)</label>
                                    <input type="text" className="input" name="address2" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="input__flexbox">
                                    <div className="input__placeholder">
                                        <label htmlFor="country" className="label  --important">Country</label>
                                        <select className="select" name="country" id="country">
                                            <option value="" disabled selected>Choose...</option>
                                            <option value="America">America</option>
                                            <option value="Russia">Russia</option>
                                        </select>
                                    </div>

                                    <div className="input__placeholder">
                                        <label htmlFor="city" className="label  --important">City</label>
                                        <select className="select" name="city" id="city">
                                            <option value="" disabled selected>Choose...</option>
                                            <option value="New York">New York</option>
                                            <option value="Moscow">Moscow</option>
                                        </select>
                                    </div>

                                    <div className="input__placeholder">
                                        <label htmlFor="index" className="label  --important">Index</label>
                                        <input type="text" className="input" name="index" id="index" />
                                    </div>
                                </div>
                            </div>

                            <div className="checkout__extra">
                                <div className="checkbox__flexbox">
                                    <input id="shipisbill" type="checkbox" className="checkbox" />
                                    <label htmlFor="shipisbill" className="label">Shipping address is the same as my billing address</label>
                                </div>

                                <div className="checkbox__flexbox">
                                    <input id="shipto" type="checkbox" className="checkbox" />
                                    <label htmlFor="shipto" className="label">Ship to a different address?</label>
                                </div>

                                <div className="checkbox__flexbox">
                                    <input id="save" type="checkbox" className="checkbox" />
                                    <label htmlFor="save" className="label">Save this information for next time</label>
                                </div>
                            </div>
                        </div>

                        <div className="checkout__cart">
                            <h3 className="checkout__title">Your cart</h3>

                            <div className="checkout__cart-content">
                                <div className="checkout__cart-row">
                                    <b>aliquam quaerat voluptatem</b>
                                    <p>$20.00</p>
                                </div>

                                <div className="checkout__cart-row">
                                    <b>aliquam quaerat voluptatem</b>
                                    <p>$20.00</p>
                                </div>

                                <div className="checkout__cart-row">
                                    <b className="checkout__promo">Promo code</b>
                                    <p>-$5</p>
                                </div>

                                <div className="checkout__cart-row">
                                    <b className="checkout__total">Total (USD)</b>
                                    <p>$35</p>
                                </div>

                                <div className="checkout__cart-inputs">
                                    <div className="checkbox__flexbox">
                                        <input type="radio" className="radio" id="credit" />
                                        <label htmlFor="credit" className="label  --black">Credit card</label>
                                    </div>

                                    <div className="checkbox__flexbox">
                                        <input type="radio" className="radio" id="debit" />
                                        <label htmlFor="debit" className="label  --black">Debit card</label>
                                    </div>

                                    <div className="checkbox__flexbox">
                                        <input type="radio" className="radio" id="paypal" />
                                        <label htmlFor="paypal" className="label  --black">Paypal</label>
                                    </div>

                                    <div className="input__placeholder  --checkout">
                                        <label htmlFor="cardname" className="label">Name on card</label>
                                        <input type="text" className="input" name="cardname" id="cardname" />
                                    </div>

                                    <div className="input__placeholder">
                                        <label htmlFor="cardnumber" className="label">Credit card number</label>
                                        <input type="text" className="input" name="cardnumber" id="cardnumber" />
                                    </div>

                                    <div className="input__flexbox">
                                        <div className="input__placeholder">
                                            <label htmlFor="expiration" className="label">Expiration</label>
                                            <input type="text" className="input" name="expiration" id="expiration" />
                                        </div>

                                        <div className="input__placeholder">
                                            <label htmlFor="cvv" className="label">CVV</label>
                                            <input type="text" className="input" name="cvv" id="cvv" />
                                        </div>
                                    </div>
                                </div>

                                <button className="btn --black --poppins" style={{ width: "100%" }}>Place An Order</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Checkout;
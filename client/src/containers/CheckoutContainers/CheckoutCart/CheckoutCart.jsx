import { CheckoutCardForm, CheckoutCartHeader } from "../../../components";

import "./CheckoutCart.scss"

const CheckoutCart = () => {
    return (
        <div className="checkout__cart">
            <h3 className="checkout__title">Your cart</h3>

            <div className="checkout__cart-content">
                
                <CheckoutCartHeader />
                <CheckoutCardForm />

                <button className="btn --black --poppins" style={{ width: "100%" }}>Place An Order</button>
            </div>
        </div>
    )
}

export default CheckoutCart;
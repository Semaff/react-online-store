import "./CartTotal.scss"

const CartTotal = () => {
    return (
        <div className="cart__total">
            <h3 className="cart__total-header">Cart Totals</h3>

            <div className="cart__total-content">

                <div className="cart__total-row">
                    <b>Subtotal</b>
                    <span>$160.00</span>
                </div>

                <div className="cart__total-row">
                    <b>Shipping</b>
                    <span>Flat Rate: $5.00</span>
                </div>

                <div className="cart__total-row">
                    <span>Calculate shipping</span>
                </div>

            </div>

            <div className="cart__total-footer">
                <div className="cart__total-row">
                    <b>Total</b>
                    <span>$165.00</span>
                </div>
            </div>

            <button className="btn  --black  --poppins" style={{ width: '100%' }}>Proceed To Checkout</button>
        </div>
    )
}

export default CartTotal;
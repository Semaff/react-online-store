import "./CheckoutCartHeader.scss";

const CheckoutCartHeader = () => {
    return (
        <div className="checkout__cart-header">
            <div className="checkout__cart-row">
                <b>aliquam quaerat voluptatem</b>
                <span>$20.00</span>
            </div>

            <div className="checkout__cart-row">
                <b>aliquam quaerat voluptatem</b>
                <span>$20.00</span>
            </div>

            <div className="checkout__cart-row">
                <b className="checkout__promo">Promo code</b>
                <span>-$5</span>
            </div>

            <div className="checkout__cart-row">
                <b className="checkout__total">Total (USD)</b>
                <span>$35</span>
            </div>
        </div>
    )
}

export default CheckoutCartHeader;
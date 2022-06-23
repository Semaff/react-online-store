import { CardForm } from "../../components";
import "./Total.scss"

const Total = ({ withForm }) => {
    let rowsContent;
    if (withForm) {
        rowsContent = (
            <>
                <div className="total__row">
                    <b style={{fontSize: "1.4rem", fontWeight: 500}}>Shirt</b>
                    <span>$20.00</span>
                </div>

                <div className="total__row">
                    <b style={{fontSize: "1.4rem", fontWeight: 500}}>Jeans</b>
                    <span>$20.00</span>
                </div>

                <div className="total__row">
                    <b className="total__promo">Promo code</b>
                    <span>-$5</span>
                </div>

                <div className="total__row">
                    <b className="total__price">Total (USD)</b>
                    <span>$35</span>
                </div>
            </>
        )
    } else {
        rowsContent = (
            <>
                <div className="total__row">
                    <b>Subtotal</b>
                    <span>$160.00</span>
                </div>

                <div className="total__row">
                    <b>Shipping</b>
                    <span>Flat Rate: $5.00</span>
                </div>

                <div className="total__row">
                    <span>Calculate shipping</span>
                </div>
            </>
        )
    }

    return (
        <div className="total">
            {!withForm && (
                <div className="total__header">
                    <h3 className="total__title">Cart Totals</h3>
                </div>
            )}

            {rowsContent}

            {!withForm
                ?
                <>
                    <div className="total__footer">
                        <div className="total__row">
                            <b>Total</b>
                            <span>$165.00</span>
                        </div>
                    </div>

                    <button className="btn  --black  --poppins" style={{ width: '100%' }}>
                        Proceed To Checkout
                    </button>
                </>
                : <CardForm />
            }
        </div>
    )
}

export default Total;
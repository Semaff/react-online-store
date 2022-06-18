import { CheckoutExtra, CheckoutForm } from "../../../components";
import "./CheckoutPayment.scss";

const CheckoutPayment = () => {
    const countryOptions = ["America", "Russia"];
    const cityOptions = ["New York", "Moscow"];

    return (
        <div className="checkout__payment">
            <h3 className="checkout__title">Billing address</h3>

            <CheckoutForm countryOptions={countryOptions} cityOptions={cityOptions} />
            <CheckoutExtra />
        </div>
    )
}

export default CheckoutPayment;
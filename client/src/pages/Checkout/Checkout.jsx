import { BillingForm } from "../../components";
import { Timeline, Total } from "../../containers";
import "./Checkout.scss"

const Checkout = () => {
    const countryOptions = ["America", "Russia"];
    const cityOptions = ["New York", "Moscow"];

    return (
        <>
            <Timeline page="Checkout" />

            <section className="section  --fullPadding">
                <div className="container">
                    <div className="checkout">
                        <BillingForm countryOptions={countryOptions} cityOptions={cityOptions} />
                        <Total withForm />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Checkout;
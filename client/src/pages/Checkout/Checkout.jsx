import { CheckoutCart, CheckoutPayment, Timeline } from "../../containers";
import "./Checkout.scss"

const Checkout = () => {
    return (
        <>
            <Timeline page="Checkout" />

            <section className="checkout">
                <div className="container">
                    <div className="checkout__inner">

                        <CheckoutPayment />
                        <CheckoutCart />
                        
                    </div>
                </div>
            </section>
        </>

    )
}

export default Checkout;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BillingForm } from "../../components";
import { Timeline, Total } from "../../containers";
import { selectBasketCoupon, selectBasketProducts } from "../../store/basketSlice";
import { selectOrderPresets, setOrderPresets } from "../../store/orderSlice";
import "./Checkout.scss"

const Checkout = () => {
    const dispatch = useDispatch();
    const orderPresets = useSelector(selectOrderPresets);
    const basketProducts = useSelector(selectBasketProducts);
    const basketCoupon = useSelector(selectBasketCoupon);

    const [orderSettings, setOrderSettings] = useState({
        firstname: orderPresets.firstname || "",
        lastname: orderPresets.lastname || "",
        username: orderPresets.username || "",
        email: orderPresets.email || "",
        address: orderPresets.address || "",
        address2: orderPresets.address2 || "",
        index: orderPresets.index || ""
    });
    const [saveInfo, setSaveInfo] = useState(false);


    const total = basketProducts.reduce((acc, item) => acc += item.price * item.basket_product.quantity, 0);
    const countryOptions = ["America", "Russia"];
    const cityOptions = ["New York", "Moscow"];

    // Scroll to top onDidMount component
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePlaceOrder = () => {
        if (saveInfo) {
            dispatch(setOrderPresets(orderSettings));
        }
    }

    return (
        <>
            <Timeline page="Checkout" />

            <section className="section  --fullPadding">
                <div className="container">
                    <div className="checkout">
                        <BillingForm
                            countryOptions={countryOptions}
                            cityOptions={cityOptions}
                            orderSettings={orderSettings}
                            setOrderSettings={setOrderSettings}
                            saveInfo={saveInfo}
                            setSaveInfo={setSaveInfo}
                        />
                        <Total
                            withForm
                            products={basketProducts}
                            total={total}
                            coupon={basketCoupon?.discount}
                            handlePlaceOrder={handlePlaceOrder}
                        />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Checkout;
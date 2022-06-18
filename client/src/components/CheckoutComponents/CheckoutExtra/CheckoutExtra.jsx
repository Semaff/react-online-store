import MyCheckBox from "../../_Other/Inputs/MyCheckBox/MyCheckBox";
import "./CheckoutExtra.scss";

const CheckoutExtra = () => {
    return (
        <div className="checkout__extra">
            <MyCheckBox
                name="shipIsBill"
                labelText="Shipping address is the same as my billing address"
            />

            <MyCheckBox
                name="shipTo"
                labelText="Ship to a different address?"
            />

            <MyCheckBox
                name="saveInfo"
                labelText="Save this information for next time"
            />
        </div>
    )
}

export default CheckoutExtra;
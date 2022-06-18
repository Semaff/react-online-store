import MyInput from "../../_Other/Inputs/MyInput/MyInput";
import MyRadio from "../../_Other/Inputs/MyRadio/MyRadio";
import "./CheckoutCardForm.scss";

const CheckoutCardForm = () => {
    return (
        <div className="checkout__card-form">
            <div className="checkout__card-form__radio">
                <MyRadio
                    name="credit"
                    labelText="Credit card"
                    labelColor="black"
                />

                <MyRadio
                    name="debit"
                    labelText="Debit card"
                    labelColor="black"
                />

                <MyRadio
                    name="paypal"
                    labelText="Paypal"
                    labelColor="black"
                />
            </div>

            <div className="checkout__card-form__inputs">
                <MyInput
                    name="cardname"
                    type="text"
                    labelText="Name on card"
                    isImportant
                    isCardName
                />

                <MyInput
                    name="cardnumber"
                    type="text"
                    labelText="Credit card number"
                    isImportant
                />

                <div className="input__flexbox">
                    <MyInput
                        name="expiration"
                        type="text"
                        labelText="Expiration"
                        isImportant
                    />

                    <MyInput
                        name="cvv"
                        type="text"
                        labelText="CVV"
                        isImportant
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckoutCardForm;
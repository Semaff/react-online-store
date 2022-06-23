import "./BillingForm.scss";
import MyCheckBox from "../_Inputs/MyCheckBox/MyCheckBox";
import MyInput from "../_Inputs/MyInput/MyInput";
import MySelect from "../_Inputs/MySelect/MySelect";

const BillingForm = ({ countryOptions, cityOptions }) => {
    return (
        <div className="billing-form">
            <div className="billing-form__title">Billing address</div>

            {/* Address form */}
            <div className="billing-form__content">
                <div className="input__flexbox">
                    <MyInput name="firstname" type="text" labelText="First Name" isImportant />
                    <MyInput name="lastname" type="text" labelText="Last name" isImportant />
                </div>

                <MyInput
                    name="username"
                    type="text"
                    labelText="Username"
                    placeholder="Username"
                    isImportant
                />

                <MyInput
                    name="email"
                    type="email"
                    labelText="Email (Optional)"
                    placeholder="you@example.com"
                />

                <MyInput
                    name="address"
                    type="text"
                    labelText="Address"
                    placeholder="1234 Main St"
                    isImportant
                />

                <MyInput
                    name="address2"
                    type="text"
                    labelText="Address 2 (Optional)"
                    placeholder="Apartment or suite"
                />

                <div className="input__flexbox">
                    <MySelect name="country" options={countryOptions} labelText="Country" isImportant />
                    <MySelect name="city" options={cityOptions} labelText="City" isImportant />

                    <MyInput name="index" type="text" labelText="Index" />
                </div>
            </div>

            {/* Extra checkboxes for saving information / */}
            <div className="billing-form__extra">
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
        </div>
    )
}

export default BillingForm;
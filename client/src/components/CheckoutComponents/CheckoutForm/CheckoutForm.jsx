import MySelect from "../../_Other/Inputs/MySelect/MySelect";
import MyInput from "../../_Other/Inputs/MyInput/MyInput";
import "./CheckoutForm.scss";

const CheckoutForm = ({ countryOptions, cityOptions }) => {
    return (
        <div className="checkout__form">
            <div className="input__flexbox">
                <MyInput
                    name="firstname"
                    type="text"
                    labelText="First Name"
                    isImportant
                />

                <MyInput
                    name="lastname"
                    type="text"
                    labelText="Last name"
                    isImportant
                />
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
                <MySelect
                    name="country"
                    options={countryOptions}
                    labelText="Country"
                    isImportant
                />

                <MySelect
                    name="city"
                    options={cityOptions}
                    labelText="City"
                    isImportant
                />

                <MyInput
                    name="index"
                    type="text"
                    labelText="Index"
                />
            </div>
        </div>
    )
}

export default CheckoutForm;
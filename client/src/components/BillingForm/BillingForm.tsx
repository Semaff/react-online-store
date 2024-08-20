import "./BillingForm.scss";
import MyCheckBox from "../_Inputs/MyCheckBox/MyCheckBox";
import MyInput from "../_Inputs/MyInput/MyInput";
import MySelect from "../_Inputs/MySelect/MySelect";
import { useState } from "react";

const BillingForm = ({
  countryOptions,
  orderSettings,
  setOrderSettings,
  cityOptions,
  saveInfo,
  setSaveInfo,
}) => {
  const [shipIsBillAddress, setShipIsBillAddress] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  return (
    <div className="billing-form">
      <div className="billing-form__title">Billing address</div>

      {/* Address form */}
      <div className="billing-form__content">
        <div className="input__flexbox">
          <MyInput
            name="firstname"
            type="text"
            labelText="First Name"
            isImportant
            value={orderSettings.firstname}
            onChange={(e) => setOrderSettings({ ...orderSettings, firstname: e.target.value })}
          />

          <MyInput
            name="lastname"
            type="text"
            labelText="Last name"
            isImportant
            value={orderSettings.lastname}
            onChange={(e) => setOrderSettings({ ...orderSettings, lastname: e.target.value })}
          />
        </div>

        <MyInput
          name="username"
          type="text"
          labelText="Username"
          placeholder="Username"
          isImportant
          value={orderSettings.username}
          onChange={(e) => setOrderSettings({ ...orderSettings, username: e.target.value })}
        />

        <MyInput
          name="email"
          type="email"
          labelText="Email (Optional)"
          placeholder="you@example.com"
          value={orderSettings.email}
          onChange={(e) => setOrderSettings({ ...orderSettings, email: e.target.value })}
        />

        <MyInput
          name="address"
          type="text"
          labelText="Address"
          placeholder="1234 Main St"
          isImportant
          value={orderSettings.address}
          onChange={(e) => setOrderSettings({ ...orderSettings, address: e.target.value })}
        />

        {shipToDifferentAddress && (
          <MyInput
            name="address2"
            type="text"
            labelText="Address 2 (Optional)"
            placeholder="Apartment or suite"
            value={orderSettings.address2}
            onChange={(e) => setOrderSettings({ ...orderSettings, address2: e.target.value })}
          />
        )}

        <div className="input__flexbox">
          <MySelect name="country" labelText="Country" options={countryOptions} isImportant />
          <MySelect name="city" labelText="City" options={cityOptions} isImportant />

          <MyInput
            name="index"
            type="text"
            labelText="Index"
            value={orderSettings.index}
            onChange={(e) => setOrderSettings({ ...orderSettings, index: e.target.value })}
          />
        </div>
      </div>

      {/* Extra checkboxes for saving information / */}
      <div className="billing-form__extra">
        <MyCheckBox
          name="shipIsBill"
          labelText="Shipping address is the same as my billing address"
          checked={shipIsBillAddress}
          onChange={(e) => setShipIsBillAddress(e.target.checked)}
        />

        <MyCheckBox
          name="shipTo"
          labelText="Ship to a different address?"
          checked={shipToDifferentAddress}
          onChange={(e) => setShipToDifferentAddress(e.target.checked)}
        />

        <MyCheckBox
          name="saveInfo"
          labelText="Save this information for next time"
          checked={saveInfo}
          onChange={(e) => setSaveInfo(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default BillingForm;

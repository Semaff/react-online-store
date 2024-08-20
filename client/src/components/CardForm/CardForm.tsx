import MyInput from "../_Inputs/MyInput/MyInput";
import MyRadio from "../_Inputs/MyRadio/MyRadio";
import "./CardForm.scss";

const CardForm = ({ onClick }) => {
  return (
    <div className="card-form">
      <div className="card-form__radio">
        <MyRadio name="card" value="credit" labelText="Credit card" labelColor="black" />
        <MyRadio name="card" value="debit" labelText="Debit card" labelColor="black" />
        <MyRadio name="card" value="paypal" labelText="Paypal" labelColor="black" />
      </div>

      <div className="card-form__inputs">
        <MyInput name="cardname" type="text" labelText="Name on card" isImportant isCardName />

        <MyInput name="cardnumber" type="text" labelText="Credit card number" isImportant />

        <div className="input__flexbox">
          <MyInput name="expiration" type="text" labelText="Expiration" isImportant />

          <MyInput name="cvv" type="text" labelText="CVV" isImportant />
        </div>

        <button className="btn --black --poppins" style={{ width: "100%" }} onClick={onClick}>
          Place An Order
        </button>
      </div>
    </div>
  );
};

export default CardForm;

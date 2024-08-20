import { useState } from "react";
import { useDispatch } from "react-redux";
import { rateProduct } from "../../store/ratingsSlice";
import MyInput from "../_Inputs/MyInput/MyInput";
import MySelect from "../_Inputs/MySelect/MySelect";
import MyTextArea from "../_Inputs/MyTextArea/MyTextArea";
import "./RatingForm.scss";

const RatingForm = ({ productId }) => {
  const [choosenRate, setChoosenRate] = useState("default");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const canSend = choosenRate !== "default" && name !== "";
  const dispatch = useDispatch();

  const handleSendRate = () => {
    dispatch(rateProduct({ productId, name, description, rate: choosenRate }));
    setName("");
    setDescription("");
    setChoosenRate("default");
  };

  return (
    <div className="rating-form">
      <MyInput
        name="name"
        type="text"
        labelText="Your name"
        placeholder="John Asias.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <MyTextArea
        name="description"
        type="text"
        labelText="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <MySelect
        name="rate"
        labelText="Your rate"
        options={[1, 2, 3, 4, 5]}
        value={choosenRate}
        onChange={(e) => setChoosenRate(e.target.value)}
      />

      <button
        className="btn --black --poppins --small"
        type="button"
        disabled={!canSend}
        onClick={handleSendRate}
      >
        Send Rate
      </button>
    </div>
  );
};

export default RatingForm;

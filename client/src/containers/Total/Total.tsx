import { useNavigate } from "react-router-dom";
import { CardForm } from "../../components";
import { CHECKOUT_ROUTE } from "../../router/routerConsts";
import "./Total.scss";

const Total = ({ withForm, products, coupon, total, handlePlaceOrder }) => {
  const navigate = useNavigate();
  const shipping = 5;

  const handleProcceed = () => {
    navigate(CHECKOUT_ROUTE);
  };

  let rowsContent;
  if (withForm) {
    rowsContent = (
      <>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div className="total__row" key={product.id}>
              <b style={{ fontSize: "1.4rem", fontWeight: 500 }}>{product.name}</b>
              <span>${product.price * product.basket_product.quantity}</span>
            </div>
          ))}

        {coupon && (
          <div className="total__row">
            <b className="total__promo">Promo code</b>
            <span>-${coupon}</span>
          </div>
        )}

        <div className="total__row">
          <b className="total__price">Total (USD)</b>
          <span>${total + shipping - (coupon || 0)}</span>
        </div>
      </>
    );
  } else {
    rowsContent = (
      <>
        <div className="total__row">
          <b>Subtotal</b>
          <span>${total}</span>
        </div>

        <div className="total__row">
          <b>Shipping</b>
          <span>Flat Rate: ${shipping}</span>
        </div>

        <div className="total__row">
          <span>Calculate shipping</span>
        </div>
      </>
    );
  }

  return (
    <div className="total">
      {!withForm && (
        <div className="total__header">
          <h3 className="total__title">Cart Totals</h3>
        </div>
      )}

      {rowsContent}

      {!withForm ? (
        <>
          <div className="total__footer">
            <div className="total__row">
              <b>Total</b>
              <span>${total + shipping}</span>
            </div>
          </div>

          <button
            onClick={handleProcceed}
            className="btn  --black  --poppins"
            style={{ width: "100%" }}
          >
            Proceed To Checkout
          </button>
        </>
      ) : (
        <CardForm onClick={handlePlaceOrder} />
      )}
    </div>
  );
};

export default Total;

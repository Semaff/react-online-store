import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Timeline, Total } from "../../containers";
import {
  addedBasketCoupon,
  removedBasketCoupon,
  selectBasketCoupon,
  selectBasketProducts,
} from "../../store/basketSlice";
import "./Cart.scss";

const checkCoupon = (coupon) => {
  switch (coupon) {
    case "FIRST TIME": {
      return { discount: 5, status: true };
    }
    default: {
      return { status: false };
    }
  }
};

const Cart = () => {
  const couponRef = useRef();
  const dispatch = useDispatch();

  const basketProducts = useSelector(selectBasketProducts);
  const basketCoupon = useSelector(selectBasketCoupon);

  // Scroll to top onDidMount component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCouponButttonClick = () => {
    const couponActivated = checkCoupon(couponRef.current.value);

    if (couponActivated.status) {
      dispatch(addedBasketCoupon(couponActivated));
    } else {
      dispatch(removedBasketCoupon(couponActivated));
    }
  };

  const total = basketProducts.reduce(
    (acc, item) => (acc += item.price * item.basket_product.quantity),
    0,
  );

  return (
    <>
      <Timeline page="Cart" />

      <section className="section  --fullPadding">
        <div className="container">
          <div className="cart">
            <Table
              products={basketProducts}
              couponRef={couponRef}
              onCouponClick={handleCouponButttonClick}
              basketCoupon={basketCoupon}
            />
            <Total coupon={basketCoupon} total={total} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

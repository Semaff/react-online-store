import { useState } from "react";
import { useDispatch } from "react-redux";
import { Remove } from "../../components/_SVG";
import { decrementProduct, incrementProduct, removeProductFromBasket } from "../../store/basketSlice";
import "./Table.scss";

const TableRow = ({ id, img, name, price, salePrice, quantity, basket_product }) => {
    const [productQuantity, setProductQuantity] = useState(basket_product.quantity);
    const dispatch = useDispatch();

    if (salePrice) {
        price = salePrice;
    }

    const handleChangeQuantity = (e) => {
        if (e.target.value < basket_product.quantity && e.target.value > 0) {
            dispatch(decrementProduct({ productId: id, quantity: basket_product.quantity - e.target.value }));
        } else if (e.target.value > basket_product.quantity && e.target.value < quantity) {
            dispatch(incrementProduct({ productId: id, quantity: e.target.value - basket_product.quantity }));
        }

        setProductQuantity(e.target.value);
    }

    const handleRemove = id => {
        dispatch(removeProductFromBasket(id));
    }

    const total = price * basket_product.quantity

    return (
        <tr>
            <td>
                <button type='button' className='table__remove' onClick={() => handleRemove(id)}>
                    <Remove />
                </button>
            </td>

            <td>
                <img
                    className='table__img'
                    src={(window.location.origin + "/db-images/" + img) || "https://placehold.jp/500x500.png"}
                    alt={name}
                />
            </td>

            <td className='table__name'>
                {name}
            </td>
            <td className='table__price'>
                ${price}
            </td>

            <td>
                <input
                    type="number"
                    className='table__quantity'
                    min={1}
                    max={quantity}
                    value={productQuantity}
                    onChange={(e) => handleChangeQuantity(e)}
                />
            </td>

            <td className='table__price'>
                ${total}
            </td>
        </tr>
    )
}

const Table = ({ products, couponRef, onCouponClick, basketCoupon }) => {
    return (
        <div className="table__responsive">
            <table className="table">
                <thead>
                    <tr className='table__header'>
                        <th className='table__title'>Remove</th>
                        <th className='table__title'>Images</th>
                        <th className='table__title'>Products</th>
                        <th className='table__title'>Prices</th>
                        <th className='table__title'>Quantity</th>
                        <th className='table__title'>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {products && products.length > 0
                        ?
                        products.map(product => (
                            <TableRow key={product.id} {...product} />
                        ))
                        :
                        <tr className="table__title">
                            <td> Your basket is clear! </td>
                        </tr>
                    }
                </tbody>
            </table>

            <div className="table__btns">
                <input
                    type="text"
                    className='table__input'
                    placeholder='Coupon code'
                    ref={couponRef}
                />
                <button className="btn --black --poppins" onClick={onCouponClick}>
                    Apply coupon
                </button>

                {basketCoupon && basketCoupon.status === true
                    ? <div className='cart__coupon'>Coupon Added!</div>
                    : <div className='cart__coupon  --error'>Coupon is wrong!</div>
                }
            </div>
        </div>
    )
}

export default Table;
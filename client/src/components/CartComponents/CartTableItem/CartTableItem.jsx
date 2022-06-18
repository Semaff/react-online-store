import { Remove } from "../../_SVG"
import "./CartTableItem.scss";

const CartTableItem = ({ img, name, price, total }) => {
    return (
        <tr>
            <td>
                <button type='button' className='cart__table-remove'><Remove /></button>
            </td>

            <td>
                <img src={img} alt={name} className='cart__table-img' />
            </td>

            <td className='cart__table-desc'>{name}</td>
            <td className='cart__table-price'>${price}</td>

            <td>
                <input type="number" defaultValue={1} className='cart__table-quantity' />
            </td>

            <td className='cart__table-price'>${total}</td>
        </tr>
    )
}

export default CartTableItem
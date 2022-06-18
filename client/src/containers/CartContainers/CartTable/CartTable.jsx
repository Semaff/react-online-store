import { CartTableItem } from "../../../components";
import "./CartTable.scss";

const CartTable = () => {
    return (
        <div className="cart__table-responsive">
            <table className="cart__table">
                <thead>
                    <tr className='cart__table-header'>
                        <th className='cart__table-title'>Remove</th>
                        <th className='cart__table-title'>Images</th>
                        <th className='cart__table-title'>Products</th>
                        <th className='cart__table-title'>Prices</th>
                        <th className='cart__table-title'>Quantity</th>
                        <th className='cart__table-title'>Total</th>
                    </tr>
                </thead>

                <tbody>
                    <CartTableItem
                        img="./images/product-1.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />

                    <CartTableItem
                        img="./images/product-2.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />

                    <CartTableItem
                        img="./images/product-3.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />
                </tbody>
            </table>
        </div>
    )
}

export default CartTable;
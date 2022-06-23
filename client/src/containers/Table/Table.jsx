import { Remove } from "../../components/_SVG";
import "./Table.scss";

const TableRow = ({ img, name, price, total }) => {
    return (
        <tr>
            <td>
                <button type='button' className='table__remove'><Remove /></button>
            </td>

            <td>
                <img src={img} alt={name} className='table__img' />
            </td>

            <td className='table__name'>
                {name}
            </td>
            <td className='table__price'>
                ${price}
            </td>

            <td>
                <input type="number" defaultValue={1} className='table__quantity' />
            </td>

            <td className='table__price'>
                ${total}
            </td>
        </tr>
    )
}

const Table = () => {
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
                    <TableRow
                        img="./images/product-1.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />

                    <TableRow
                        img="./images/product-2.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />

                    <TableRow
                        img="./images/product-3.jpg"
                        name="Aliquam quaerat voluptatem"
                        price="100.00"
                        total="100.00"
                    />
                </tbody>
            </table>

            <div className="table__btns">
                <input type="text" className='table__input' placeholder='Coupon code' />
                <button className="btn --black --poppins">Apply coupon</button>
            </div>
        </div>
    )
}

export default Table;
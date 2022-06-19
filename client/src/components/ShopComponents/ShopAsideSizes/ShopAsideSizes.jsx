import "./ShopAsideSizes.scss";

const ShopAsideSize = ({ name, amount }) => {
    return (
        <div className="checkbox__flexbox">
            <input type="checkbox" className="checkbox" id={`size-${name}`} />

            <label htmlFor={`size-${name}`} className="label">
                {name} ({amount})
            </label>
        </div>
    )
}

const ShopAsideSizes = ({ sizes }) => {
    return (
        <>
            {sizes.map((size) => (
                <ShopAsideSize {...size} key={size.name} />
            ))}
        </>
    )
}

export default ShopAsideSizes;
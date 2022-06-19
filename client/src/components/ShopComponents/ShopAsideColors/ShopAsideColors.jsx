import "./ShopAsideColors.scss";

const ShopAsideColor = ({ name, hex, amount }) => {
    return (
        <a href="#a" className="shop__aside-color" key={name}>
            <div className="color" style={{ background: `${hex}` }}></div>
            {name} ({amount})
        </a>
    )
}

const ShopAsideColors = ({ colors }) => {
    return (
        <>
            {colors.map(color => (
                <ShopAsideColor key={color.hex} {...color} />
            ))}
        </>
    )
}

export default ShopAsideColors;
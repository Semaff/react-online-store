import "./ShopAsideCategories.scss";

/*
  SubCategories
*/
const ShopAsideSubCategory = ({ name }) => {
    return (
        <li>
            <a href="#a" className="shop__aside-category">{name}</a>
        </li>
    )
}

const ShopAsideSubCategories = ({ subcategories }) => {
    return (
        <ul className="shop__aside-subcategories">
            {subcategories.map(category => (
                <ShopAsideSubCategory key={category} name={category} />
            ))}
        </ul>
    )
}

/*
  Categories
*/
const ShopAsideCategory = ({ name, price, subcategories }) => {
    return (
        <li>
            <a className="shop__aside-category__title" href="#a">
                <span>{name}</span>
                <span>{price}</span>
            </a>

            {subcategories && subcategories.length > 0 && <ShopAsideSubCategories subcategories={subcategories} />}
        </li>
    )
}

const ShopAsideCategories = ({ categories }) => {
    return (
        <ul className="shop__aside-categories">
            {categories.map(category => (
                <ShopAsideCategory {...category} key={category.name} />
            ))}
        </ul>
    )
}

export default ShopAsideCategories;
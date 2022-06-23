import "./CategoriesList.scss";

const Category = ({ name, amount, subcategories }) => {
    return (
        <li className="category">
            <a className="category__title" href="#a">
                <span>{name}</span>
                <span>{amount}</span>
            </a>

            {subcategories && subcategories.length > 0 && (
                <ul className="subcategories">
                    {subcategories.map(subcategory => (
                        <li key={subcategory} className="category">
                            <a href="#a">{subcategory}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

const CategoriesList = ({ categories }) => {
    return (
        <ul className="categories">
            {categories.map(category => (
                <Category {...category} key={category.name} />
            ))}
        </ul>
    )
}

export default CategoriesList;
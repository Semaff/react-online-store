import "./CategoriesList.scss";

const Category = ({ id, name, amount, brands, onCategoryClick, onBrandClick, searchParams }) => {
    return (
        <li
            className={`category ${+searchParams.get("categoryId") === id ? "active" : ""}`}
            onClick={(e) => onCategoryClick(e, id)}
        >
            <h5 className="category__title">
                <span>{name}</span>
                <span>{amount}</span>
            </h5>

            {brands && brands.length > 0 && (
                <ul className="subcategories">
                    {brands.map(brand => (
                        <li
                            key={brand.id}
                            className={`subcategory ${+searchParams.get("brandId") === brand.id ? "active" : ""}`}
                            onClick={(e) => onBrandClick(e, id, brand.id)}
                        >
                            {brand.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

const CategoriesList = ({ categories, searchParams, changeSearchParams }) => {
    const handleCategoryClick = (e, categoryId) => {
        if (e.currentTarget.classList.contains("active")) {
            changeSearchParams("delete", "categoryId");
        } else {
            changeSearchParams("set", "categoryId", categoryId);
        }
        changeSearchParams("delete", "brandId");
    }

    const handleBrandClick = (e, categoryId, brandId) => {
        e.stopPropagation();

        if (e.currentTarget.classList.contains("active")) {
            changeSearchParams("delete", "brandId");
        } else {
            changeSearchParams("set", "categoryId", categoryId);
            changeSearchParams("set", "brandId", brandId);
        }
    }

    return (
        <ul className="categories">
            {Object.keys(categories)?.length > 0 && Object.entries(categories).map(category => (
                <Category
                    {...category[1]}
                    key={category[1].name}
                    onCategoryClick={handleCategoryClick}
                    onBrandClick={handleBrandClick}
                    searchParams={searchParams}
                />
            ))}
        </ul>
    )
}

export default CategoriesList;
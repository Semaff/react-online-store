import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CategoriesList, MyCheckBox, MyRange, Product } from "../../components";
import useDebouncedFunction from "../../hooks/useDebouncedFunction";
import { selectCategories } from "../../store/categoriesSlice";
import {
  selectProductColors,
  selectProductSizes,
  selectProductsMaxPrice,
  selectProductsMinPrice,
  selectSaleProducts,
} from "../../store/productsSlice";
import "./Aside.scss";

const AsideBlock = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="aside__block">
      <div className="aside__title">
        <h4>{title}</h4>
        <button
          type="button"
          className={`toggle ${visible ? "active" : ""}`}
          onClick={() => setVisible(!visible)}
        />
      </div>

      <div
        className="aside__content"
        style={{ maxHeight: visible ? "unset" : "", paddingTop: visible ? "2rem" : "" }}
      >
        {children}
      </div>
    </div>
  );
};

const Aside = () => {
  /*
      Functions
    */

  // Several Colors / Sizes can be selected, so we need to make array of Search Query separating them by '%'
  function changeSearchQueryArray(name, value) {
    if (!searchParams.get(name)) {
      searchParams.set(name, value);
      return setSearchParams(searchParams);
    } else {
      let queryArray = searchParams.get(name).split("%");

      if (queryArray.includes(value)) {
        queryArray = queryArray.filter((el) => el !== value);
        if (queryArray.length === 0 || queryArray[0] === "") {
          searchParams.delete(name);
          return setSearchParams(searchParams);
        }
      } else {
        queryArray.push(value);
      }

      searchParams.set(name, queryArray.join("%"));
      return setSearchParams(searchParams);
    }
  }

  // You can't select multiple Price, brandId and categoryId, so it's just Search Query
  function changeSearchQuery(action, name, value) {
    if (action === "delete") {
      searchParams.delete(name);
    } else if (action === "set") {
      searchParams.set(name, value);
    }
    setSearchParams(searchParams);
  }

  /*
      Variables
    */
  const [searchParams, setSearchParams] = useSearchParams();

  // For Aside products
  const productsThatOnASale = useSelector(selectSaleProducts);

  // Aside config for products
  const categories = useSelector(selectCategories);
  const colors = useSelector(selectProductColors);
  const sizes = useSelector(selectProductSizes);

  // Handle Range input (from - minPrice ; to - maxPrice ; range - for label)
  const debouncedChangeSearchQuery = useDebouncedFunction(changeSearchQuery, 2000);
  const minPrice = useSelector(selectProductsMinPrice);
  const maxPrice = useSelector(selectProductsMaxPrice);
  const [range, setRange] = useState(searchParams.get("price") || minPrice);

  const handlePriceChange = (e) => {
    setRange(e.target.value);
    debouncedChangeSearchQuery("set", "price", e.target.value);
  };

  return (
    <aside className="aside">
      {/* Aside Config */}
      <div className="aside__section">
        {/* Categories */}
        <AsideBlock title="Categories">
          <CategoriesList
            categories={categories}
            searchParams={searchParams}
            changeSearchParams={changeSearchQuery}
          />
        </AsideBlock>

        {/* Price */}
        <AsideBlock title="Price">
          <MyRange
            name="price"
            from={minPrice}
            to={maxPrice}
            value={range}
            onChange={handlePriceChange}
          />
        </AsideBlock>

        {/* Colors */}
        <AsideBlock title="Color">
          <div className="aside__colors">
            {Object.keys(colors)?.length > 0 &&
              Object.entries(colors).map((color) => (
                <button
                  type="button"
                  key={color[0]}
                  onClick={() => changeSearchQueryArray("color", color[0].slice(1))}
                  className={`aside__color ${searchParams.get("color")?.split("%").includes(color[0].slice(1)) ? "active" : ""}`}
                >
                  <div className="color" style={{ background: `${color[0]}` }} />({color[1]})
                </button>
              ))}
          </div>
        </AsideBlock>

        {/* Sizes */}
        <AsideBlock title="Size">
          {Object.keys(sizes)?.length > 0 &&
            Object.entries(sizes).map((size, index) => (
              <div className="checkbox__flexbox" key={index}>
                <MyCheckBox
                  checked={searchParams.get("size")?.split("%").includes(size[0])}
                  onChange={() => changeSearchQueryArray("size", size[0])}
                  name={`size-${size[0]}`}
                />

                <label htmlFor={`size-${size[0]}`} className="label">
                  {size[0]} ({size[1]})
                </label>
              </div>
            ))}
        </AsideBlock>
      </div>

      {/* Aside Banner */}
      <div className="aside__section">
        <a className="aside__banner" href="#a">
          <img src="./images/product-5.jpg" alt="aside" />

          <div className="aside__banner-text">
            <b>Discover</b>
            <span>the lifestyle</span>
          </div>
        </a>
      </div>

      {/* Aside Products */}
      <div className="aside__section">
        <div className="aside__title">
          <h4>Sale products</h4>
        </div>

        <div className="aside__products">
          {Object.keys(productsThatOnASale).length > 0 &&
            productsThatOnASale.rows
              .slice(0, 3)
              .map((product) => <Product isMini key={product.name} {...product} />)}
        </div>
      </div>
    </aside>
  );
};

export default Aside;

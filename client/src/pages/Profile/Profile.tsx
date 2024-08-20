import { Product } from "../../components";
import { Timeline } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/userSlice";
import { selectBasket } from "../../store/basketSlice";
import "./Profile.scss";
import { useEffect } from "react";

const Profile = () => {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  // Scroll to top onDidMount component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <Timeline page="Profile" />

      <section className="section  --fullPadding">
        <div className="container  --shrinked">
          <div className="profile">
            <h3 className="profile__title">Profile / Liked products</h3>

            {basket && basket.favourites && basket.favourites.length > 0 ? (
              basket.favourites.map((product) => (
                <Product isFavourite key={product.id} {...product} />
              ))
            ) : (
              <div className="profile__none">You don't like any of our products!</div>
            )}

            <button type="button" className="profile__logout" onClick={handleLogout}>
              Logout from your account?
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

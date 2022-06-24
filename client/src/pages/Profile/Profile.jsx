import { Product } from "../../components";
import { Timeline } from "../../containers";
import { useDispatch } from "react-redux";
import "./Profile.scss";
import { userLogout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogout());
        navigate('/#top');
    }

    return (
        <>
            <Timeline page="Profile" />

            <section className="section  --fullPadding">
                <div className="container  --shrinked">
                    <div className="profile">
                        <h3 className="profile__title">Profile / Liked products</h3>

                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />

                        <button type="button" className="profile__logout" onClick={handleLogout}>
                            Logout from your account?
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
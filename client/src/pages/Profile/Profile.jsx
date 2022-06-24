import { Product } from "../../components";
import { Timeline } from "../../containers";
import "./Profile.scss";

const Profile = () => {
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
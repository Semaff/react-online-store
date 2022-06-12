import { About, Intro, Middlebar, Navbar, Topbar } from "../../components";
import "./home.scss"

const Home = () => {
    return (
        <>
            <Topbar />
            <Middlebar />
            <Navbar />
            <Intro />
            <About />
        </>
    )
}

export default Home;
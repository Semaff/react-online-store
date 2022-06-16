import './App.scss';
import { Footer, Middlebar, Navbar, Topbar } from './containers';
import Cart from './pages/Cart/Cart';
// import Home from "./pages/Home/Home"

function App() {
    return (
        <div className="App">
            <Topbar />
            <Middlebar />
            <Navbar />

            <Cart />
            {/* <Home /> */}

            <Footer />
        </div>
    );
}

export default App;

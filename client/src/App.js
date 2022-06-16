import './App.scss';
import { Footer, Middlebar, Navbar, Topbar } from './containers';
// import Cart from './pages/Cart/Cart';
// import Home from "./pages/Home/Home"
import Checkout from './pages/Checkout/Checkout';

function App() {
    return (
        <div className="App">
            <Topbar />
            <Middlebar />
            <Navbar />

            {/* <Cart /> */}
            {/* <Home /> */}
            <Checkout />

            <Footer />
        </div>
    );
}

export default App;

import './App.scss';
import { Footer, Middlebar, Navbar, Topbar } from './containers';
// import ProductPage from './pages/ProductPage/ProductPage';
// import Cart from './pages/Cart/Cart';
import Home from "./pages/Home/Home"
import Checkout from './pages/Checkout/Checkout';
// import Shop from './pages/Shop/Shop';

function App() {
    return (
        <div className="App">
            <Topbar />
            <Middlebar />
            <Navbar />

            {/* <Cart /> */}
            <Home />
            <Checkout />
            {/* <Shop /> */}
            {/* <ProductPage /> */}

            <Footer />
        </div>
    );
}

export default App;

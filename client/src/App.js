import './App.scss';
import { Footer, Middlebar, Navbar, Topbar } from './containers';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Topbar />
            <Middlebar />
            <Navbar />

            <AppRouter />

            <Footer />
        </BrowserRouter>
    );
}

export default App;

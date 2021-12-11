import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import LoginPage from '../Pages/LoginPage';
import ErrorPage from '../Pages/ErrorPage';
import ContactPage from '../Pages/ContactPage';
import Menu from "../Components/Menu";

function NavRoutes() {
    return (

        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/error" element={<ErrorPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>

    )
}

export default NavRoutes;
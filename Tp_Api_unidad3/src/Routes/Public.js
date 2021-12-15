import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import LoginPage from '../Pages/LoginPage';
import ContactPage from '../Pages/ContactPage';
import Menu from "../Components/Menu";
import DetailProductPage from "../Pages/DetailPage";

function NavRoutes() {
    return (

        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route exact path="/product/:id" element={<DetailProductPage />}/>
            </Routes>
        </BrowserRouter>

    )
}

export default NavRoutes;
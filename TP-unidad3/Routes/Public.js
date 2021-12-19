import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import LoginPage from '../Pages/LoginPage';
import RegistroPage from '../Pages/RegistroPage';
import Menu from "../Components/Menu";
import DetailProductPage from "../Pages/DetailPage";
import ErrorPage from "../Pages/ErrorPage";

function NavRoutes() {
    return (

        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/registro" element={<RegistroPage />} />
                <Route exact path="/product/:id" element={<DetailProductPage />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>

    )
}

export default NavRoutes;
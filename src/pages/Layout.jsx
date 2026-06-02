import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "../context/themeContext";
import { ProductsProvider } from "../context/productsContext";
function Layout() {
    return (
        <>
            <ThemeProvider>
                <ProductsProvider>
                    <Header />
                    <div className="container">
                        <Outlet />
                    </div>
                </ProductsProvider>
            </ThemeProvider>
        </>
    );
}
export default Layout;

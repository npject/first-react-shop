import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "../context/themeContext";
import { ProductsProvider } from "../context/productsContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
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
library.add(fab, fas, far);

import { NavLink } from "react-router-dom";
import { useContext,useEffect } from "react";
import { themeContext } from "../context/themeContext";
import { ProductsContext } from "../context/productsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const { color,changeColor } = useContext(themeContext);
    console.log(color);
    const { count,changeProduct } = useContext(ProductsContext);
    useEffect(() => {
        changeProduct(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : 0);
    },[]);

    return (
        <nav className={`navbar navbar-expand-lg ${color == 'light' ? 'bg-body-tertiary' : 'bg-dark'}`}
         data-bs-theme={`${color == 'light' ? 'light' : 'dark'}`}>
            <div className='container'>
                <a className='navbar-brand' href='#'>navbar</a>
                <ul className='navbar-nav'>
                    <li className='nav-item d-flex align-items-center'>
                        <div className='form-check form-switch'>
                          <label className="form-check-label" for="input-theme">
                            <i className={`fa-solid ${color == 'light' ? 'fa-moon' : 'fa-sun text-light'}`}></i>
                          </label>
                            <input className='form-check-input' type='checkbox' id='input-theme'
                          onClick={()=> changeColor(`${color=='light' ? 'dark' : 'light'}`)}></input>
                        </div> 
                    </li>
                    <li className='nav-item'><NavLink
                        className={({ isActive, isPending }) => isActive ? 'active nav-link' : 'nav-link'}
                        to='/'>Home</NavLink></li>
                    <li className='nav-item'><NavLink
                        className={({ isActive, isPending }) => isActive ? 'active nav-link' : 'nav-link'}
                        to='/shop'>Products</NavLink></li>
                    <li className='nav-item d-flex align-items-center position-relative'>
                        <NavLink to='/cart'>
                        <FontAwesomeIcon icon="fa-solid fa-shopping-cart" className={`mt-2 pt-1 ${color=='dark' ? 'text-light' : 'text-dark'}`}></FontAwesomeIcon>
                        <span className='badge position-absolute top-0 start-0 text-bg-danger rounded-pill'>
                            {count}
                        </span>
                        </NavLink>
                    </li>
                
                </ul>
            </div>
        </nav>
    )
}
export default Header;
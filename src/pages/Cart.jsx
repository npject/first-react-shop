import { useState,useEffect,useContext } from 'react';
import { ProductsContext } from "../context/productsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart (){
    const [itemsCart,setItemsCart] = useState([]);
    const { changeProduct } = useContext(ProductsContext);

    useEffect(() =>{
        setItemsCart(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    },[]);
    const removeItem = (idItem)=>{
        let newItems = itemsCart.filter(product=> product.id != idItem);
        setItemsCart(newItems);
        localStorage.setItem('cartItems',JSON.stringify(newItems));
        changeProduct(newItems.length);
    }
    return (
        <>
            <div className='row'>
                {itemsCart.length ? itemsCart.map(item =>
                    <div className='col-12' key={item.id}>
                        <div className='card' style={{ height: '300px' }} >
                                <img src={item.image} className='card-img-top object-fit-contain'
                                    style={{ height: '200px' }} />
                            <div className='card-body'>
                                <h5 className='card-title text-truncate'>{item.title}</h5>
                                <p className='card-text text-danger'>price: {item.price}$</p>
                                <FontAwesomeIcon icon="fa-solid fa-trash" className='text-danger'
                                 onClick={() => removeItem(item.id)}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                ) : (<h1>no products in cart</h1>)}
            </div>
        </>
    )
}
export default Cart;
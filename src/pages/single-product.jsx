import { useLoaderData } from "react-router-dom";
import { useState,useEffect,useContext,useRef } from "react";
import { ProductsContext } from "../context/productsContext";
import { Alert } from "bootstrap";

export async function loader({ params }) {
    const idProduct = await params.id;
    const dataFetch = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
    const response = await dataFetch.json();

    return { response };
}

function SingleProduct() {
    const { changeProduct } = useContext(ProductsContext);
    const [message,setMessage] = useState('');
    const alertRef = useRef();

    const { response } = useLoaderData();
    const [cartItems,setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    const addToCart = (item)=> {
        const isProductsInCart = cartItems.find((cartItem) => cartItem.id == item.id);
        if(isProductsInCart){
            setCartItems(
                cartItems.map((cartItem)=>
                    cartItem.id == item.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem 
                )
            )
        }else{
            setCartItems([...cartItems , {...item,quantity:1}]);
        }
        showAlert();
    };

    const showAlert = ()=>{
        setMessage('this product added to cart.');
        const alertEl = alertRef.current;
        const bsAlert = new Alert(alertEl);
        alertEl.classList.add('show');

        setTimeout(() => {
            bsAlert.close();
        }, 3000);
    }

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
        changeProduct(cartItems.length);   
    },[cartItems]);
    return (
        <>
            <h1>SingleProduct</h1>
            <div className='row'>
                <div className='col-lg-8 mx-auto mb-2'>
                    <div className='card' style={{ height: '500px' }} >
                        <img src={response.image} className='card-img-top object-fit-contain'
                            style={{ height: '300px' }} />
                        <div className='card-body'>
                            <h5 className='card-title'>{response.title}</h5>
                            <p className='card-text text-danger'>price: {response.price}$</p>
                            <p className='card-text'>{response.description}</p>
                            <button className='btn btn-warning'
                             onClick={() => addToCart(response)}>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>





            <div className='position-fixed top-0 end-0 m-5'>
                <div className='alert alert-success' ref={alertRef}>
                    {message}
                </div>
            </div>
        </>
    );
}
export default SingleProduct;
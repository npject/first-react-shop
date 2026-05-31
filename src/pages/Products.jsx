import { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../share/loading';
import { ProductsContext } from "../context/productsContext";

function Products() {
    const { count,changeProduct } = useContext(ProductsContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        const fetchData = await fetch('https://fakestoreapi.com/products');
        const res = await fetchData.json();
        setLoading(false);
        setData(res);
    };
    useEffect(() => {
        getData();
        changeProduct(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : 0);
        //const isData = true;
        return () => {
            //isData = false;
        };
    }, []);
    return (
        <>
            <h1>Products</h1>
            {loading && (<Loading />)}
            <div className='row'>
                {!loading && data.map(item =>
                    <div className='col-lg-3 mb-2' key={item.id}>
                        <div className='card' style={{ height: '300px' }} >
                            <Link to={`/shop/${item.id}`} target='_blank'>
                                <img src={item.image} className='card-img-top object-fit-contain'
                                    style={{ height: '200px' }} />
                            </Link>
                            <div className='card-body'>
                                <h5 className='card-title text-truncate'>{item.title}</h5>
                                <p className='card-text text-danger'>price: {item.price}$</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Products;
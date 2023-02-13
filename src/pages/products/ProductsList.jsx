import Hero from "../../components/Hero";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProducts } from "../../services/Product.service";

const ProductsList = () => {
    const [ products, setProducts] = useState([]);
    useEffect(()=>{
        document.title = 'Products List';
        getProducts().then ((res)=>{
            setProducts(res.data);
        })
        
    },[])
    return ( 
      
        <main>
            <Hero/>
            <div className="m-5 center ">
                    <div className="row">
                        {/* <div className="col-md-2">
                            <h5>Esto puede ser algun menu o anuncio</h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                        </div> */}
                        <div className="col-12">
                            <div className="row">
                                {products.map((product) => {
                                    return (
                                        <div className="col-sm-6 col-md-4" key={product._id}>
                                            <div className="card mb-4">
                                                <img src={product.image}
                                                className="card-img-top" alt='test' />

                                                <div className="card-body">
                                                    <h3 >${product.price}</h3>
                                                    <h4 className='card-title'>{product.name}</h4>
                                                    <p className="card-text">{product.description}</p>
                                                    <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Carrito</Link>
                                                    <Link to={`/detail-product/${product._id}`} className="btn btn-warning btn-sm d-grid mt-2">Detalle</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>
        </main>
     );
}
 
export default ProductsList;
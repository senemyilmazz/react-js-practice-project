import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails(props) {

    const {id} = useParams();
    const [product, setProduct] = useState({});
  
    useEffect( () => {
        fetchProduct();
    }, []);

    async function fetchProduct(){
        try {

            let response = await axios.get("https://dummyjson.com/products/" + id);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="card" >
        <img src={product.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-price">Price: {product.price} $</p>
            <p className='card-rating'>Rating: {product.rating}</p>
        </div>
    </div>

  )
}

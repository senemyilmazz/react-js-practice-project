import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from "axios"

export default function Homepage(props) {

  const [products, setProducts] = useState([]);
  
    useEffect( () => {
        fetchProducts();
    }, []);

    async function fetchProducts(){
      let response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }

    const receivedDataFromChildToBeDeleted = (data) => {
        setProducts(products.filter((p) => p.id !== data.id))
    }


    return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {
            products.map(product => (
              <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
                <ProductCard product={product} sendDataToParentToBeDeleted={receivedDataFromChildToBeDeleted}/>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

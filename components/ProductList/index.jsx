import { useState, useEffect } from "react";
import Product from "../Product";

export default function ProductList({ id }) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    id ?
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProductsData([data])
          console.log([data])
          console.log(toString(data))
        })
      :
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProductsData(data)

        })
      ;
  }, [id]);

  return (
    productsData &&
    productsData.map((product) => <Product productData={product} key={product.id} />)
  );
}

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductList from "../../components/ProductList";
import Prodotti from ".";

export default function Id() {
  const router = useRouter();
  const { id } = router.query
  console.log(id)
  // const [productData, setProductData] = useState({});

  // C'e un errore qui... attenzione a decommentare, rompe tutto! :D
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${router.query.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProductData(data));
  // }, []);

  // return <Product productData={productData} />;

  return (

    <section className={"container"}>
      <Prodotti id={id} />
    </section>

  )
}

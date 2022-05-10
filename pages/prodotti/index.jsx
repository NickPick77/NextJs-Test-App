import ProductList from "../../components/ProductList";
import styles from "./styles.module.scss"

export default function Prodotti({ id }) {
    console.log("prodotti", id)
    return (
        <section className={styles.container}>
            <ProductList id={id} />
        </section>
    )
}
import Image from "next/image";
import styles from "./index.module.scss";


export default function Product({ productData }) {
  const { title, image, price, description } = productData;

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={250} />
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

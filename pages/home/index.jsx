import Link from 'next/link'
import styles from "./styles.module.scss"
export default function Homepage() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                <Link href='/prodotti/'>
                    Prodotti
                </Link>
            </h1>
            <h2>
                <Link href={"/contacts"}>
                    Contatti
                </Link>
            </h2>

        </main>
    )
}
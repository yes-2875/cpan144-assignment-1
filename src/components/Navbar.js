import ListItems from "@/pages/ListItems";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar({children}) {
    return (
        <>
        <nav className={styles.Navbar}>
            <Link href="/ListItems">List Items</Link>
            <Link href="/">Homepage</Link>
        </nav>
        {children}
        </>
    );
}
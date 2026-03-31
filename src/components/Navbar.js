import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Navbar({children}) {
    
    return (
        <>
        <nav className={`${styles.Navbar} ${geistMono.variable} ${geistSans.variable}`}>
            
            <Link href="/" className={styles.Link}>Homepage</Link>
            <Link href="/ListItems" className={styles.Link}>List Items</Link>
            
        </nav>
        {children}
        </>
    );
}
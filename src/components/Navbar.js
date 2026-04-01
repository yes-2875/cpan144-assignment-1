import { Geist, Geist_Mono } from "next/font/google"; // Loads necessary font libraries
import styles from "@/styles/Navbar.module.css"; // Grab Navbar CSS module for styling
import Link from "next/link"; // To make use of Next.js pages routing.

// Grab Geist Sans and Geist Mono CSS modules from library functions to use as variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Navbar({children}) {
    /*
      
      This Navbar component serves as a way to let the user navigate between
      the different pages displaying components that apply React concepts.
      
      The Link component is imported from node_modules/next folder
      It is the way the Next.js router handles URLs to redirect the user
      to the relevant index.js in the folder of the page name.
      It gets converted into an <a> tag in the HTML on render/in Developer console.
      
      You may be wondering why the Navbar component has a {children} prop.
      That's because in /src/pages/_app.js, I am actually wrapping
      the page content served to it (as props) inside the Navbar component.
      
      The Navbar component will place all page contents in {children} prop below itself.
      This applies globally to all pages in the app, it's rather convenient.
      
    */
    return (
        <>
        <nav className={`${styles.Navbar} ${geistMono.variable} ${geistSans.variable}`}>
            
            <Link href="/"            className={styles.Link}>Homepage</Link>
            <Link href="/ListItems"   className={styles.Link}>List Items</Link>
            <Link href="/CounterPage" className={styles.Link}>Counter</Link>
        </nav>
        {children}
        </>
    );
}
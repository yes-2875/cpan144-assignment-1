import "@/styles/globals.css"; // Import global CSS modules to use throughout every page in this app
import Navbar from "@/components/Navbar"; // Imports Navbar component to wrap page content inside.

export default function App({ Component, pageProps }) {
  
  /* This format of wrapping components and pageProps inside Navbar
  will allow the Navbar in its own code to appear before the contents
  of every page served through _app.js */
  
  return (
    <>
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
    </>
    );
}
